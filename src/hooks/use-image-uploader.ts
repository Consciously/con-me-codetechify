import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import { useMutation } from '@tanstack/react-query';
import { FileRejection } from 'react-dropzone';
import matter from 'gray-matter';
import { markdownMetadataSchema, frontMatterSchema } from '@/lib/validation';
import type { MarkdownMetadata } from '@/lib/validation';

export const useImageUploader = () => {
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);

	const { toast } = useToast();

	const { startUpload, isUploading } = useUploadThing('imagesUploader', {
		onClientUploadComplete: ([data]) => {
			console.log(`Uploaded ${data.url}`);
		},
		onUploadProgress: progress => {
			setUploadProgress(progress);
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

		startUpload(acceptedFiles);
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
