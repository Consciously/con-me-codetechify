'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import Dropzone from 'react-dropzone';
import {
	Image as ImageIcon,
	Loader2,
	MousePointerSquareDashed,
	X,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useUploadThing } from '@/lib/uploadthing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/page-header';
import { useMutation } from 'convex/react';
import { anyApi, type FunctionReference } from 'convex/server';

type ImagesUploadDataProps = {
	projectId: string;
};

type UploadedImage = {
	file: File;
	previewUrl: string;
};

export default function ImagesUploadData({ projectId }: ImagesUploadDataProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
	const { toast } = useToast();

	const appendImages = useMutation(
		anyApi.projects.appendImages as FunctionReference<'mutation'>,
	);

	const MAX_IMAGES = 4;
	const uploadedImagesLength = uploadedImages.length;

	// Disable the button if not all images are uploaded
	const isUploadReady = uploadedImagesLength === MAX_IMAGES;

	const { startUpload, isUploading } = useUploadThing('imageUploader', {
		onClientUploadComplete: async (files) => {
			try {
				const urls = files.map(f => f.url);
				await appendImages({ id: projectId, imageUrls: urls });

				startTransition(() => {
					router.push(`/admin/uploads/summary?id=${projectId}`);
				});
			} catch (error) {
				toast({
					title: 'Failed to save images',
					description:
						error instanceof Error ? error.message : 'Unknown error occurred',
					variant: 'destructive',
				});
			}
		},
		onUploadProgress(p) {
			setUploadProgress(p);
		},
	});

	const onDropRejected = () => {};
	const onDropAccepted = (acceptedFiles: File[]) => {
		if (uploadedImages.length + acceptedFiles.length > MAX_IMAGES) {
			toast({
				title: 'You can only upload up to 4 images',
				variant: 'destructive',
			});
			return;
		}

		const newImages = acceptedFiles.map(file => ({
			file,
			previewUrl: URL.createObjectURL(file),
		}));

		setUploadedImages([...uploadedImages, ...newImages]);
	};

	// This function is called when the "Upload Images" button is clicked
	const handleUpload = () => {
		// Only upload if all images are ready
		if (isUploadReady) {
			const filesToUpload = uploadedImages.map(image => image.file);
			startUpload(filesToUpload, {}); // Upload files, then persist URLs to Convex
			setIsDragOver(false);

			// console.log('Uploading images1:', filesToUpload);
			// console.log('Uploading images2:', uploadedImages);
		}
	};

	return (
		<>
			<PageHeader title='Upload Images' />

			{/* Full-width image gallery grid container */}
			<div className='relative w-full max-w-4xl mx-auto mb-4'>
				{/* Message box above the grid */}
				<div className='flex justify-end mb-2'>
					<Card className='border-primary'>
						<CardContent className='p-1'>
							<p>
								Uploaded Images{' '}
								<span className='text-primary'>
									{uploadedImagesLength} of {MAX_IMAGES}
								</span>
							</p>
						</CardContent>
					</Card>
				</div>

				{/* 2x2 Image Grid with reserved space and dynamic placeholders */}
				<div className='grid grid-cols-4 gap-4'>
					{uploadedImages.map((image, index) => (
						<div key={index} className='relative overflow-hidden group'>
							<Image
								src={image.previewUrl}
								width={300}
								height={300}
								alt='Uploaded image'
								unoptimized
								className='aspect-square w-full h-full object-cover rounded-lg'
							/>
							{/* Hover effect for darkening the image */}
							<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity' />
							{/* Delete button in the center on hover */}
							<Button
								onClick={() => {
									const newImages = uploadedImages.filter(
										(_, i) => i !== index,
									);
									setUploadedImages(newImages);
								}}
								variant='link'
								className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity'
							>
								<X className='h-8 w-8 p-1 bg-black rounded-full' />
							</Button>
						</div>
					))}

					{/* Render remaining placeholders based on how many images have been uploaded */}
					{[...Array(MAX_IMAGES - uploadedImagesLength)].map((_, index) => (
						<div
							key={index}
							className='border-2 border-dashed border-secondary rounded-lg flex items-center justify-center h-40'
						>
							<p className='text-gray-400'>
								Image {uploadedImagesLength + index + 1} placeholder
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Upload Button */}
			<Layout.Grid>
				<Layout.GridItem fullSpan>
					<div className='flex flex-col justify-center items-center gap-y-6 mb-6'>
						<Button
							onClick={handleUpload}
							disabled={!isUploadReady || isUploading} // Disable the button when uploading
						>
							{isUploading ? (
								<Loader2 className='h-6 w-6 animate-spin' />
							) : (
								'Upload Images'
							)}
						</Button>
					</div>
				</Layout.GridItem>
			</Layout.Grid>

			{/* Dropzone */}
			<Layout.Grid>
				<Layout.GridItem fullSpan>
					<div className='border-2 border-dashed border-primary rounded-lg min-h-[20rem] flex justify-center items-center'>
						<Dropzone
							onDropRejected={onDropRejected}
							onDropAccepted={onDropAccepted}
							accept={{
								'images/jpg': ['.jpg'],
								'images/jpeg': ['.jpeg'],
								'images/png': ['.png'],
								'images/webp': ['.webp'],
							}}
							onDragEnter={() => setIsDragOver(true)}
							onDragLeave={() => setIsDragOver(false)}
						>
							{({ getRootProps, getInputProps }) => (
								<div
									className='h-full w-full flex flex-col items-center justify-center'
									{...getRootProps()}
								>
									<input {...getInputProps()} />
									{isDragOver ? (
										<MousePointerSquareDashed className='h-6 w-6 text-primary mb-2' />
									) : isUploading || isPending ? (
										<Loader2 className='h-6 w-6 text-primary mb-2' />
									) : (
										<ImageIcon className='h-6 w-6 text-primary mb-2' />
									)}
									<div className='flex flex-col justify-center items-center'>
										{isUploading ? (
											<div className='flex flex-col items-center'>
												<p>Uploading...</p>
												<Progress
													value={uploadProgress}
													className='mt-2 w-40 h-2 bg-foreground'
												/>
											</div>
										) : isPending ? (
											<div className='flex flex-col items-center'>
												<p>Redirecting, please wait...</p>
											</div>
										) : isDragOver ? (
											<p>
												<span className='font-semibold text-primary'>
													Drop images
												</span>{' '}
												to upload
											</p>
										) : (
											<p className='cursor-pointer'>
												<span className='font-semibold text-primary'>
													Click to upload
												</span>{' '}
												or drag and drop
											</p>
										)}
									</div>
									{isPending ? null : (
										<p className='text-xs text-primary'>
											Images (.jpg | jpeg, .png, .webp)
										</p>
									)}
								</div>
							)}
						</Dropzone>
					</div>
				</Layout.GridItem>
			</Layout.Grid>
		</>
	);
}
