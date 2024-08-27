'use client';

import { useParams } from 'next/navigation';
import DropzoneComponent from '@/components/dropzone-component';
import { useMarkdownUploader } from '@/hooks/use-markdown-uploader';
import { useImageUploader } from '@/hooks/use-image-uploader';
import Block from '@/components/ui/custom-block-structure';

export default function DropzoneContainer() {
	const { projectId } = useParams();
	const mdUploader = useMarkdownUploader();
	const imgUploader = useImageUploader();

	const hasProjectId = Boolean(projectId);

	return (
		<Block>
			<Block.Item className='md:col-span-6'>
				<DropzoneComponent
					title='Upload Markdown'
					isDragOver={mdUploader.isDragOver}
					isUploading={mdUploader.isUploading}
					uploadProgress={mdUploader.uploadProgress}
					onDropAccepted={mdUploader.onDropAccepted}
					onDropRejected={mdUploader.onDropRejected}
					onDragEnter={() => mdUploader.setIsDragOver(true)}
					onDragLeave={() => mdUploader.setIsDragOver(false)}
					accept={{
						'text/markdown': ['.md'],
					}}
					dropzoneVariant='md'
					hasProjectId={hasProjectId}
				/>
			</Block.Item>
			<Block.Item className='md:col-span-6'>
				<DropzoneComponent
					title='Upload Images'
					isDragOver={imgUploader.isDragOver}
					isUploading={imgUploader.isUploading}
					uploadProgress={imgUploader.uploadProgress}
					onDropAccepted={imgUploader.onDropAccepted}
					onDropRejected={imgUploader.onDropRejected}
					onDragEnter={() => imgUploader.setIsDragOver(true)}
					onDragLeave={() => imgUploader.setIsDragOver(false)}
					accept={{
						'image/png': ['.png'],
						'image/jpeg': ['.jpeg'],
						'image/jpg': ['.jpg'],
						'image/webp': ['.webp'],
					}}
					dropzoneVariant='img'
					hasProjectId={hasProjectId}
				/>
			</Block.Item>
		</Block>
	);
}
