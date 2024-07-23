'use client';

import Image from 'next/image';
import ProjectStruct from './custom-project-layout';
import { useState } from 'react';
import { SelectProject } from '@/db/schema';
import { cn } from '@/lib/utils';

type ProjectDescriptionPropsType = {
	project: SelectProject;
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
		<ProjectStruct.ImagesContainer className={cn('w-full', className)}>
			<div className='grid grid-cols-6 gap-3 w-full'>
				<div className='col-span-4 sm:col-span-full'>
					<ProjectStruct.Image className='w-full h-[256px] relative'>
						<Image
							src={selectedImage}
							alt={project.title}
							fill
							className='object-cover object-center'
						/>
					</ProjectStruct.Image>
				</div>
				<div className='col-span-2 sm:col-span-full grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-y-3 my-auto'>
					{project.images.map((image, idx) => (
						<div className='col-span-1' key={idx}>
							<ProjectStruct.Image
								className='w-full h-[96px] cursor-pointer relative'
								onClick={() => handleImageClick(image)}
							>
								<Image
									src={image}
									fill
									className='object-cover object-center'
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
