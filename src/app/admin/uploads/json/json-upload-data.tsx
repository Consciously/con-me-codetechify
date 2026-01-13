'use client';

import { useState, useTransition } from 'react';
import { Progress } from '@/components/ui/progress';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import Dropzone, { FileRejection } from 'react-dropzone';
import { Loader2, MousePointerSquareDashed, Image } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import PageHeader from '@/components/page-header';
import { useMutation } from 'convex/react';
import { anyApi, type FunctionReference } from 'convex/server';

export default function JsonUploadData() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const { toast } = useToast();
	const [isDragOver, setIsDragOver] = useState<boolean>(false);
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	// const [jsonContent, setJsonContent] = useState<object | null>(null)

	const createProject = useMutation(
		anyApi.projects.create as FunctionReference<'mutation'>,
	);

	const { startUpload, isUploading } = useUploadThing('jsonUploader', {
		onClientUploadComplete: async ([file]) => {
			try {
				const res = await fetch(file.url);
				const data = await res.json();

				const projectId = await createProject({
					title: data.title ?? 'Untitled',
					description: data.description ?? '',
					technologies: data.technologies ?? [],
					clientName: data.clientName ?? '',
					images: data.images ?? [],
					features: data.features ?? [],
					githubRepo: data.githubRepo ?? '',
					liveDemo: data.liveDemo ?? '',
					importance: typeof data.importance === 'number' ? data.importance : 0,
				});

				startTransition(() => {
					router.push(`/admin/uploads/images?id=${projectId}`);
				});
			} catch (error) {
				toast({
					title: 'Failed to create project',
					description:
						error instanceof Error ? error.message : 'Unknown error occurred',
					variant: 'destructive',
				});
			}
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
		startUpload(acceptedFile, {});
		setIsDragOver(false);
	};

	return (
		<>
			<PageHeader title='Upload JSON Data' />
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
										<p className='text-xs text-primary'>JSON File (.json)</p>
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
