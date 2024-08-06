'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import matter from 'gray-matter';
import { useMutation } from '@tanstack/react-query';
import { markdownMetadataSchema, frontMatterSchema } from '@/lib/validation';
import type { MarkdownMetadata } from '@/lib/validation';
import { FileRejection } from 'react-dropzone';
import ContainerStruct from '@/components/ui/custom-container-layout';
import DropzoneComponent from '@/components/dropzone-component';

export default function DropzoneContainer() {
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
				<DropzoneComponent
					title='Upload Markdown'
					isDragOver={isDragMdOver}
					isUploading={isMdUploading}
					uploadProgress={uploadMdProgress}
					onDropAccepted={onDropMdAccepted}
					onDropRejected={onDropMdRejected}
					onDragEnter={() => setIsMdDragOver(true)}
					onDragLeave={() => setIsMdDragOver(false)}
					accept={{
						'text/markdown': ['.md'],
					}}
					dropzoneVariant='md'
				/>
			</ContainerStruct.Content>

			<ContainerStruct.Content className='md:col-span-6 h-[300px]'>
				<DropzoneComponent
					title='Upload Images'
					isDragOver={isDragImgOver}
					isUploading={isImgUploading}
					uploadProgress={uploadImgProgress}
					onDropAccepted={onDropImgAccepted}
					onDropRejected={onDropImgRejected}
					onDragEnter={() => setIsImgDragOver(true)}
					onDragLeave={() => setIsImgDragOver(false)}
					accept={{
						'image/png': ['.png'],
						'image/jpeg': ['.jpeg'],
						'image/jpg': ['.jpg'],
						'image/webp': ['.webp'],
					}}
					dropzoneVariant='img'
				/>
			</ContainerStruct.Content>
		</ContainerStruct.Layout>
	);
}
