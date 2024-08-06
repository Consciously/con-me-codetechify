import Dropzone, { FileRejection } from 'react-dropzone';
import { MousePointerSquareDashed, Loader2, Image } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type DropzoneComponentPropsType = {
	title: string;
	isDragOver: boolean;
	isUploading: boolean;
	uploadProgress: number;
	onDropAccepted: (acceptedFiles: File[]) => void;
	onDropRejected: (rejectedFiles: FileRejection[]) => void;
	onDragEnter: () => void;
	onDragLeave: () => void;
	accept: Record<string, string[]>;
	dropzoneVariant?: 'md' | 'img';
};

export default function DropzoneComponent({
	title,
	isDragOver,
	isUploading,
	uploadProgress,
	onDropAccepted,
	onDropRejected,
	onDragEnter,
	onDragLeave,
	accept,
	dropzoneVariant,
}: DropzoneComponentPropsType) {
	return (
		<>
			<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center mb-3 md:mb-6 xl:mb-12'>
				{title}
			</h4>

			<Dropzone
				onDropRejected={onDropRejected}
				onDropAccepted={onDropAccepted}
				accept={accept}
				onDragEnter={onDragEnter}
				onDragLeave={onDragLeave}
			>
				{({ getRootProps, getInputProps }) => (
					<div
						className={cn(
							'h-full w-full flex-1 flex flex-col items-center justify-center border-2 border-dashed',
							{
								'border-primary': dropzoneVariant === 'md',
								'border-secondary': dropzoneVariant === 'img',
							},
						)}
						{...getRootProps()}
					>
						<input {...getInputProps()} />
						{isDragOver ? (
							<MousePointerSquareDashed
								className={cn('h-6 w-6  mb-2', {
									'text-primary': dropzoneVariant === 'md',
									'text-secondary': dropzoneVariant === 'img',
								})}
							/>
						) : isUploading ? (
							<Loader2
								className={cn('animate-spin h-6 w-6  mb-2', {
									'text-primary': dropzoneVariant === 'md',
									'text-secondary': dropzoneVariant === 'img',
								})}
							/>
						) : (
							// eslint-disable-next-line jsx-a11y/alt-text
							<Image
								className={cn('h-6 w-6  mb-2', {
									'text-primary': dropzoneVariant === 'md',
									'text-secondary': dropzoneVariant === 'img',
								})}
							/>
						)}
						<div
							className={cn('flex flex-col justify-center mb-2 text-sm', {
								'text-primary': dropzoneVariant === 'md',
								'text-secondary': dropzoneVariant === 'img',
							})}
						>
							{isUploading ? (
								<div className='flex flex-col items-center'>
									<p>Uploading...</p>
									<Progress
										value={uploadProgress}
										className='mt-2 w-40 h-2 bg-gray-300'
									/>
								</div>
							) : isDragOver ? (
								<p>
									<span className='font-semibold'>Drop file</span> to upload
								</p>
							) : (
								<p>
									<span className='font-semibold'>Click to upload</span> or drag
									and drop
								</p>
							)}
						</div>
					</div>
				)}
			</Dropzone>
		</>
	);
}
