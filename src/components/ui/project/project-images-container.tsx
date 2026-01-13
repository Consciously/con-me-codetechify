'use client';

import Image from 'next/image';
import ProjectStruct from '../custom-project-structure';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import type { ProjectDoc } from '@/types/project';

type ProjectDescriptionPropsType = {
	project: ProjectDoc;
	className?: string;
	variant?: 'gallery' | 'preview';
};

export default function ProjectImagesContainer({
	project,
	className,
	variant = 'gallery',
}: ProjectDescriptionPropsType) {
	const images = useMemo(() => project.images ?? [], [project.images]);
	const [selectedImage, setSelectedImage] = useState<string | undefined>();
	const activeImage = selectedImage ?? images[0];
	const isRemote = (src: string) => src.startsWith('http://') || src.startsWith('https://');

	if (!images.length) {
		return (
			<ProjectStruct.ImagesContainer className={cn(className)}>
				<div className='w-full rounded-lg border border-dashed border-primary/40 bg-background/40 p-6 text-center text-sm text-muted-foreground'>
					No images available.
				</div>
			</ProjectStruct.ImagesContainer>
		);
	}

	if (variant === 'preview')
		return (
			<ProjectStruct.ImagesContainer className={cn(className)}>
				<ProjectStruct.Image className='w-full h-full'>
					<Image
						src={images[0]}
						alt={project.title}
						width={1200}
						height={900}
						unoptimized={isRemote(images[0])}
						className='aspect-[4/3] w-full h-auto object-cover object-center rounded-lg'
					/>
				</ProjectStruct.Image>
			</ProjectStruct.ImagesContainer>
		);

	return (
		<ProjectStruct.ImagesContainer className={cn(className)}>
			<div className='grid grid-cols-8 gap-3 w-full'>
				<div className='col-span-6 my-auto'>
					<ProjectStruct.Image className='w-full h-full'>
						<Image
							src={activeImage}
							alt={project.title}
							width={1024}
							height={1024}
							unoptimized={isRemote(activeImage)}
							className='aspect-square w-full h-auto object-cover object-center rounded-md'
						/>
					</ProjectStruct.Image>
				</div>
				<div className='col-span-2 grid grid-cols-1 gap-3'>
					{images.map((image, idx) => (
						<div className='col-span-1' key={idx}>
							<button
								type='button'
								aria-label={`Select image ${idx + 1}`}
								onClick={() => setSelectedImage(image)}
								className={cn(
									'block w-full rounded-md border-2 border-secondary p-0.5',
									'transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
									'hover:border-primary/60',
									{
										'border-primary': image === activeImage,
									},
								)}
							>
								<Image
									src={image}
									width={256}
									height={256}
									unoptimized={isRemote(image)}
									className='aspect-square w-full h-auto object-cover object-center rounded-[6px]'
									alt={`Thumbnail ${idx + 1}`}
								/>
							</button>
						</div>
					))}
				</div>
			</div>
		</ProjectStruct.ImagesContainer>
	);
}
