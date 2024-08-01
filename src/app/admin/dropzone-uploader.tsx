'use client';

import { useState } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';
import { useUploadThing } from '@/lib/uploadthing';

export default function DropzoneUploader() {
	const [isDragOver, setIsDragOver] = useState<boolean>(false);

	const { startUpload, isUploading } = useUploadThing('markdownUploader', {
		onClientUploadComplete: ([data]) => {
			console.log('upload complete');
		},
	});

	const onDropRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles;
		setIsDragOver(false);
		console.log(`${file.file.type} type is not supported.`);
	};

	const onDropAccepted = (acceptedFiles: File[]) => {
		startUpload(acceptedFiles);
		setIsDragOver(false);
	};

	return (
		<Dropzone
			onDropRejected={onDropRejected}
			onDropAccepted={onDropAccepted}
			accept={{ 'text/markdown': ['.md'] }}
			onDragEnter={() => setIsDragOver(true)}
			onDragLeave={() => setIsDragOver(false)}
		>
			{({ getRootProps, getInputProps }) => (
				<div
					className='h-full w-full flex-1 flex flex-col items-center justify-center'
					{...getRootProps}
				>
					<input {...getInputProps} />
				</div>
			)}
		</Dropzone>
	);
}
