'use client';

import { UploadButton } from '@/lib/utils';

export default function UploadImages() {
	return (
		<UploadButton
			endpoint='imageUploader'
			onClientUploadComplete={res => {
				console.log('Files: ', res);
				alert('Files uploaded successfully');
			}}
			onUploadError={(error: Error) => {
				alert('Error uploading files' + error.message);
			}}
		/>
	);
}
