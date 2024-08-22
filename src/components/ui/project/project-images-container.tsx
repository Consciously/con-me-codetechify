'use client';

import Image from 'next/image';
import ProjectStruct from '../custom-project-structure';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Project } from '@prisma/client';

type ProjectDescriptionPropsType = {
	project: Project;
	className?: string;
};

export default function ProjectImagesContainer({
	project,
	className,
}: ProjectDescriptionPropsType) {
	const [selectedImage, setSelectedImage] = useState(project.images[0]);

	const handleImageClick = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<ProjectStruct.ImagesContainer className={cn(className)}>
			<div className='grid grid-cols-8 gap-3 w-full'>
				<div className='col-span-6 my-auto'>
					<ProjectStruct.Image className='w-full h-full'>
						<Image
							src={selectedImage}
							alt={project.title}
							width={1024}
							height={1024}
							className='aspect-square w-full h-auto object-cover object-center rounded-md'
						/>
					</ProjectStruct.Image>
				</div>
				<div className='col-span-2 grid grid-cols-1 gap-3'>
					{project.images.map((image, idx) => (
						<div className='col-span-1' key={idx}>
							<ProjectStruct.Image
								className={cn(
									'w-full h-full cursor-pointer p-0.5 border-2 border-secondary rounded-md',
									{
										'border-primary': image === selectedImage,
									},
								)}
								onClick={() => handleImageClick(image)}
							>
								<Image
									src={image}
									width={1024}
									height={1024}
									className='aspect-square w-full h-auto object-cover object-center'
									alt={`Thumbnail ${idx + 1}`}
								/>
							</ProjectStruct.Image>
						</div>
					))}
				</div>
			</div>
		</ProjectStruct.ImagesContainer>
	);
}
