'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Dropzone, { FileRejection } from 'react-dropzone';
import { useUploadThing } from '@/lib/uploadthing';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import ContainerStruct from '@/components/ui/custom-container-layout';
import matter from 'gray-matter';
import { useMutation } from '@tanstack/react-query';
import {
	MarkdownMetadata,
	markdownMetadataSchema,
	frontMatterSchema,
} from '@/lib/validation';

export default function DropzoneUploader() {
	const [isDragMdOver, setIsMdDragOver] = useState<boolean>(false);
	const [isDragImgOver, setIsImgDragOver] = useState<boolean>(false);
	const [uploadMdProgress, setUploadMdProgress] = useState<number>(0);
	const [uploadImgProgress, setUploadImgProgress] = useState<number>(0);
	const { toast } = useToast();

	const { projectId } = useParams();

	const { startUpload: startMdUpload, isUploading: isMdUploading } =
		useUploadThing('markdownUploader', {
			onClientUploadComplete: ([data]) => {
				console.log(`Uploaded ${data.url}`);
			},
			onUploadProgress: progress => {
				setUploadMdProgress(progress);
			},
		});

	const handleMdFileUpload = async (file: File): Promise<MarkdownMetadata> => {
		const text = await file.text();
		const { data: frontMatter, content } = matter(text);
		const validationResult = frontMatterSchema.safeParse(frontMatter);

		if (!validationResult.success) {
			throw new Error(validationResult.error.errors[0].message);
		}

		return { frontMatter: validationResult.data, content };
	};

	const { mutate } = useMutation({
		mutationKey: ['uploadMdFile'],
		mutationFn: handleMdFileUpload,
		onSuccess: (data, variables) => {
			const validationResult = markdownMetadataSchema.safeParse(data);

			if (!validationResult.success) {
				toast({
					title: 'Markdown upload failed.',
					description: validationResult.error.errors[0].message,
					variant: 'destructive',
				});
				return;
			}
			startMdUpload([variables], {
				...validationResult.data,
			});
		},
	});

	const { startUpload: startImgUpload, isUploading: isImgUploading } =
		useUploadThing('imagesUploader', {
			onClientUploadComplete: ([data]) => {
				console.log(`Uploaded ${data.url}`);
			},
			onUploadProgress: progress => {
				setUploadImgProgress(progress);
			},
		});

	const onDropMdRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles;
		setIsMdDragOver(false);
		toast({
			title: `${file.file.type} type is not supported.`,
			description: 'Please upload a markdown file.',
			variant: 'destructive',
		});
	};

	const onDropImgRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles;
		setIsImgDragOver(false);
		toast({
			title: `${file.file.type} type is not supported.`,
			description: 'Please upload an image.',
			variant: 'destructive',
		});
	};

	const onDropMdAccepted = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		mutate(file);
		setIsMdDragOver(false);
	};

	const onDropImgAccepted = (acceptedFiles: File[]) => {
		if (!projectId) {
			toast({
				title: 'Image upload failed.',
				description: 'Please add project first',
				variant: 'destructive',
			});
			setIsImgDragOver(false);
			return;
		}

		startImgUpload(acceptedFiles);
		setIsImgDragOver(false);
	};

	return (
		<ContainerStruct.Layout className='gap-6'>
			<ContainerStruct.Content className='md:col-span-6 h-[300px]'>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center mb-3 md:mb-6 xl:mb-12'>
					Upload Markdown
				</h4>
				<Dropzone
					onDropRejected={onDropMdRejected}
					onDropAccepted={onDropMdAccepted}
					accept={{
						'text/markdown': ['.md'],
					}}
					onDragEnter={() => setIsMdDragOver(true)}
					onDragLeave={() => setIsMdDragOver(false)}
				>
					{({ getRootProps, getInputProps }) => (
						<div
							className='h-full w-full flex-1 flex flex-col items-center justify-center  border-2 border-primary border-dashed'
							{...getRootProps()}
						>
							<input {...getInputProps()} />
							{isDragMdOver ? (
								<MousePointerSquareDashed className='h-6 w-6 text-primary mb-2' />
							) : isMdUploading ? (
								<Loader2 className='animate-spin h-6 w-6 text-primary mb-2' />
							) : (
								// eslint-disable-next-line jsx-a11y/alt-text
								<Image className='h-6 w-6 text-primary mb-2' />
							)}
							<div className='flex flex-col justify-center mb-2 text-sm text-primary'>
								{isMdUploading ? (
									<div className='flex flex-col items-center'>
										<p>Uploading...</p>
										<Progress
											value={uploadMdProgress}
											className='mt-2 w-40 h-2 bg-gray-300'
										/>
									</div>
								) : isDragMdOver ? (
									<p>
										<span className='font-semibold'>Drop file</span> to upload
									</p>
								) : (
									<p>
										<span className='font-semibold'>Click to upload</span> or
										drag and drop
									</p>
								)}
							</div>
						</div>
					)}
				</Dropzone>
			</ContainerStruct.Content>
			<ContainerStruct.Content className='md:col-span-6 h-[300px]'>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center mb-3 md:mb-6 xl:mb-12'>
					Upload Images
				</h4>
				<Dropzone
					onDropRejected={onDropImgRejected}
					onDropAccepted={onDropImgAccepted}
					accept={{
						'image/png': ['.png'],
						'image/jpeg': ['.jpeg'],
						'image/jpg': ['.jpg'],
						'image/webp': ['.webp'],
					}}
					onDragEnter={() => setIsImgDragOver(true)}
					onDragLeave={() => setIsImgDragOver(false)}
				>
					{({ getRootProps, getInputProps }) => (
						<div
							className='h-full w-full flex-1 flex flex-col items-center justify-center  border-2 border-secondary border-dashed'
							{...getRootProps()}
						>
							<input {...getInputProps()} />
							{isDragImgOver ? (
								<MousePointerSquareDashed className='h-6 w-6 text-secondary mb-2' />
							) : isImgUploading ? (
								<Loader2 className='animate-spin h-6 w-6 text-secondary mb-2' />
							) : (
								// eslint-disable-next-line jsx-a11y/alt-text
								<Image className='h-6 w-6 text-secondary mb-2' />
							)}
							<div className='flex flex-col justify-center mb-2 text-sm text-secondary'>
								{isImgUploading ? (
									<div className='flex flex-col items-center'>
										<p>Uploading...</p>
										<Progress
											value={uploadImgProgress}
											className='mt-2 w-40 h-2 bg-gray-300'
										/>
									</div>
								) : isDragImgOver ? (
									<p>
										<span className='font-semibold'>Drop file</span> to upload
									</p>
								) : (
									<p>
										<span className='font-semibold'>Click to upload</span> or
										drag and drop
									</p>
								)}
							</div>
						</div>
					)}
				</Dropzone>
			</ContainerStruct.Content>
		</ContainerStruct.Layout>
	);
}
