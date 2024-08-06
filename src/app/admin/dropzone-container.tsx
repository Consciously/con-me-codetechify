'use client';

import { useParams } from 'next/navigation';
import ContainerStruct from '@/components/ui/custom-container-layout';
import DropzoneComponent from '@/components/dropzone-component';
import { useMarkdownUploader } from '@/hooks/use-markdown-uploader';
import { useImageUploader } from '@/hooks/use-image-uploader';

export default function DropzoneContainer() {
	const { projectId } = useParams();
	const mdUploader = useMarkdownUploader();
	const imgUploader = useImageUploader();

	const hasProjectId = Boolean(projectId);

	return (
		<ContainerStruct.Layout className='gap-6'>
			<ContainerStruct.Content className='md:col-span-6 h-[300px]'>
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
			</ContainerStruct.Content>

			<ContainerStruct.Content className='md:col-span-6 h-[300px]'>
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
			</ContainerStruct.Content>
		</ContainerStruct.Layout>
	);
}
