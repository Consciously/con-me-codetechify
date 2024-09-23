'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import H1 from '@/components/ui/h1';
import Dropzone from 'react-dropzone';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useUploadThing } from '@/lib/uploadthing';

export default function ImagesUploadData() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);

	const { startUpload, isUploading } = useUploadThing('jsonUploader', {
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
	const onDropAccepted = () => {};

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
