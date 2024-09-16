'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import H1 from '@/components/ui/h1';
import Dropzone, { FileRejection } from 'react-dropzone';
import { Loader2, MousePointerSquareDashed, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function JsonUploadData() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const { toast } = useToast();

	const [isDragOver, setIsDragOver] = useState<boolean>(false);

	const onDropRejected = (rejectedFiles: FileRejection[]) => {
		const [file] = rejectedFiles;
		setIsDragOver(false);

		toast({
			title: `${file.file.type} is not supported`,
			description: 'Please upload a valid JSON file',
			variant: 'destructive',
		});
	};

	const onDropAccepted = (acceptedFile: File[]) => {
		console.log(acceptedFile);
		setIsDragOver(false);
	};

	// const handleNextStep = () => {
	// 	const randomId = Math.random().toString(36).substring(7);
	// 	startTransition(() => {
	// 		router.push(`/admin/uploads/images?id=${randomId}`);
	// 	});
	// };

	let isUploading = '';

	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<Layout.FlexItem>
					<H1>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
							JSON Upload
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
								'application/json': ['.json'],
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
											</div>
										) : isPending ? (
											<div className='flex flex-col items-center'>
												<p>Redirecting, pleas wait...</p>
											</div>
										) : isDragOver ? (
											<p>
												<span className='font-semibold text-primary'>
													Drop json file
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
										<p className='text-xs text-primary'>JSON</p>
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
