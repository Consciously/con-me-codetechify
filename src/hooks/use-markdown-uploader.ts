import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import { useMutation } from '@tanstack/react-query';
import { FileRejection } from 'react-dropzone';
import matter from 'gray-matter';
import { markdownMetadataSchema, frontMatterSchema } from '@/lib/validation';
import type { MarkdownMetadata } from '@/lib/validation';

export const useMarkdownUploader = () => {
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);

	const { toast } = useToast();

	const { startUpload, isUploading } = useUploadThing('markdownUploader', {
		onClientUploadComplete: ([data]) => {
			console.log(`Uploaded ${data.url}`);
		},
		onUploadProgress: progress => {
			setUploadProgress(progress);
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
			startUpload([variables], {
				...validationResult.data,
			});
		},
	});

	const onDropAccepted = (acceptedFiles: File[], projectId?: string) => {
		if (projectId) {
			toast({
				title: 'Markdown upload failed.',
				description: 'An project is already added',
				variant: 'destructive',
			});
			setIsDragOver(false);
			return;
		}

		const file = acceptedFiles[0];
		mutate(file);
		setIsDragOver(false);
	};

	const onDropRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles;
		setIsDragOver(false);
		toast({
			title: `${file.file.type} type is not supported.`,
			description: 'Please upload a markdown file.',
			variant: 'destructive',
		});
	};

	return {
		isDragOver,
		setIsDragOver,
		isUploading,
		uploadProgress,
		onDropAccepted,
		onDropRejected,
	};
};
