'use client';

import Image from 'next/image';
import ProjectStruct from './custom-project-layout';
import { useState } from 'react';
import { SelectProject } from '@/db/schema';

export default function ProjectImagesContainer({
	project,
}: {
	project: SelectProject;
}) {
	const [selectedImage, setSelectedImage] = useState(project.images[0]);

	const handleImageClick = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<ProjectStruct.ImagesContainer className=''>
			<div className='grid grid-cols-4 gap-3 w-full'>
				<div className='col-span-full sm:col-span-3'>
					<ProjectStruct.Image className='w-auto h-[256px] relative'>
						<Image
							src={selectedImage}
							alt={project.title}
							fill
							className='object-cover object-center'
						/>
					</ProjectStruct.Image>
				</div>
				<div className='col-span-full sm:col-span-1 grid grid-cols-2 gap-3'>
					{project.images.map((image, idx) => (
						<div className='col-span-1' key={idx}>
							<ProjectStruct.Image
								className='w-auto h-[96px] sm:h-full  cursor-pointer relative'
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
