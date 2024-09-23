'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import H1 from '@/components/ui/h1';
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
	const [isUploadReady, setIsUploadReady] = useState<boolean>(false);
	const maxImages = 4;
	const { toast } = useToast();

	const uploadedImagesLength = uploadedImages.length;

	const { startUpload, isUploading } = useUploadThing('imageUploader', {
		onClientUploadComplete: async ([data]) => {
			// Fetch the project ID returned by the server
			const projectId = data.serverData?.projectId;

			startTransition(() => {
				router.push(`/admin/uploads/summary?id=${projectId}`);
			});
		},
		onUploadProgress(p) {
			setUploadProgress(p);
		},
	});

	const onDropRejected = () => {};
	const onDropAccepted = (acceptedFiles: File[]) => {
		if (uploadedImages.length + acceptedFiles.length > maxImages) {
			toast({
				title: 'You can only upload up to 4 images',
				variant: 'destructive',
			});
			return;
		}

		if (uploadedImages.length + acceptedFiles.length <= maxImages) {
			const newImages = acceptedFiles.map(file => ({
				file,
				previewUrl: URL.createObjectURL(file),
			}));

			setUploadedImages([...uploadedImages, ...newImages]);

			if (uploadedImagesLength === maxImages - 1) {
				setIsUploadReady(true);
			}
		}
	};

	const onUploadComplete = (acceptedFiles: File[]) => {
		startUpload(acceptedFiles, { projectId });
		setIsDragOver(false);
	};

	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<Layout.FlexItem>
					<H1>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
							Images Upload
						</span>
					</H1>
				</Layout.FlexItem>
			</Layout.Flex>
			<Layout.Grid className='min-h-[20rem] place-items-center'>
				<Layout.GridItem colSpan={{ sm: 1, md: 6, xl: 8 }}>
					<Layout.Grid>
						{uploadedImages.map((image, index) => (
							<Layout.GridItem key={index} colSpan={{ sm: 2 }}>
								<div className='relative flex'>
									<Image
										src={image.previewUrl}
										width={1024}
										height={1024}
										alt='Uploaded image'
										className='aspect-square w-full h-full object-cover rounded-lg'
									/>

									<Button
										onClick={() => {
											const newImages = uploadedImages.filter(
												(_, i) => i !== index,
											);
											setUploadedImages(newImages);
										}}
										variant='link'
										className='absolute top-2 right-2'
									>
										<X className='h-4 w-4 text-primary font-bold border-2 border-primary rounded-full' />
									</Button>
								</div>
							</Layout.GridItem>
						))}
					</Layout.Grid>
				</Layout.GridItem>

				<Layout.GridItem colSpan={{ sm: 1, md: 6, xl: 4 }}>
					<Card className='border-primary'>
						<CardContent className='p-1'>
							<p>
								Uploaded Images{' '}
								<span className='text-primary'>
									{uploadedImagesLength} of {maxImages}
								</span>
							</p>
						</CardContent>
					</Card>
				</Layout.GridItem>
			</Layout.Grid>
			<Layout.Grid>
				<Layout.GridItem fullSpan>
					<div className='flex flex-col justify-center items-center gap-y-6 mb-6'>
						<Button onClick={() => onUploadComplete} disabled={!isUploadReady}>
							Upload Images
						</Button>
					</div>
				</Layout.GridItem>
			</Layout.Grid>
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
										// eslint-disable-next-line jsx-a11y/alt-text
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
													Drop text file
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
