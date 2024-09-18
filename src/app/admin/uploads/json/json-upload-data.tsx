'use client';

import { useState, useTransition } from 'react';
import { Progress } from '@/components/ui/progress';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import H1 from '@/components/ui/h1';
import Dropzone, { FileRejection } from 'react-dropzone';
import { Loader2, MousePointerSquareDashed, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';

export default function JsonUploadData() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const { toast } = useToast();
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);

	const { startUpload, isUploading } = useUploadThing('jsonUploader', {
		onClientUploadComplete: async ([data]) => {
			// Fetch the project ID returned by the server
			const projectId = data.serverData?.projectId;
			console.log('projectId', projectId);

			startTransition(() => {
				router.push(`/admin/uploads/images?id=${projectId}`);
			});
		},
		onUploadProgress(p) {
			setUploadProgress(p);
		},
	});

	const onDropRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles;
		setIsDragOver(false);

		toast({
			title: `${file.file.type} is not supported`,
			description: 'Please upload a valid text file',
			variant: 'destructive',
		});
	};

	const onDropAccepted = (acceptedFile: File[]) => {
		// Start the upload without projectId, let the server generate it
		startUpload(acceptedFile, { projectId: undefined });
		setIsDragOver(false);
	};

	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<Layout.FlexItem>
					<H1>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
							JSON File Upload
						</span>
					</H1>
				</Layout.FlexItem>
			</Layout.Flex>
			<Layout.Grid>
				<Layout.GridItem fullSpan>
					<div className='border-2 border-dashed border-primary rounded-lg min-h-[20rem] flex justify-center items-center'>
						<Dropzone
							onDropRejected={onDropRejected}
							onDropAccepted={onDropAccepted}
							accept={{
								'application/json': ['.json'], // Accept only text files
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
										<Image className='h-6 w-6 text-primary mb-2' />
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
										<p className='text-xs text-primary'>Text File (.txt)</p>
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
