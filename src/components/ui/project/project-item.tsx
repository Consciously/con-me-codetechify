'use client';

import ProjectStruct from '@/components/ui/project/custom-project-layout';
import { buttonVariants } from '@/components/ui/button';
import { cn, formatDate, separateWords } from '@/lib/utils';
import type { SelectProject } from '@/db/schema';
import { useState } from 'react';
import Image from 'next/image';
import Spacer from '../spacer';

type ProjectItemPropsType = {
	project: SelectProject;
};

export default function ProjectItem({ project }: ProjectItemPropsType) {
	const [selectedImage, setSelectedImage] = useState(project.images[0]);
	const [smallImages, setSmallImages] = useState(
		project.images.filter(image => image !== selectedImage).slice(0, 3),
	);

	const handleImageClick = (image: string) => {
		const newSelectedImage = image;
		const newSmallImages = project.images
			.filter(img => img !== newSelectedImage)
			.slice(0, 3);

		setSelectedImage(newSelectedImage);
		setSmallImages(newSmallImages);
	};

	return (
		<ProjectStruct.Container className='h-full'>
			{/* project header */}
			<ProjectStruct.Header className='w-full md:w-[650px] my-3 md:my-6 xl:my-12'>
				<ProjectStruct.Title>{project.title}</ProjectStruct.Title>
				<ProjectStruct.Meta>
					<p className='flex gap-3 justify-center items-center'>
						<span className='text-primary'>
							{separateWords(project.clientName)}
						</span>
						<span className='text-secondary'>
							{formatDate(project.createdAt)}
						</span>
					</p>
				</ProjectStruct.Meta>
			</ProjectStruct.Header>
			{/* project content */}
			<ProjectStruct.Content>
				<ProjectStruct.Description className='w-full md:w-[650px] mx-auto'>
					{project.description}
				</ProjectStruct.Description>

				<ProjectStruct.ImagesContainer className='my-3 md:my-6 xl:my-12'>
					<div className='w-full flex gap-3 md:w-[650px] md:mx-auto'>
						<ProjectStruct.Image className='w-auto h-[256px] xl:h-[512px]'>
							<Image
								src={selectedImage}
								alt={project.title}
								fill
								className='object-cover'
							/>
						</ProjectStruct.Image>
						<div className='flex flex-col gap-3'>
							{smallImages.map((image, idx) => (
								<ProjectStruct.Image
									key={idx}
									className='w-[96px] h-[96px] xl:w-[128px] xl:h-[128px] cursor-pointer'
									onClick={() => handleImageClick(image)}
								>
									<Image
										src={image}
										fill
										className='w-full h-auto object-cover'
										alt={`Thumbnail ${idx + 1}`}
									/>
								</ProjectStruct.Image>
							))}
						</div>
					</div>
				</ProjectStruct.ImagesContainer>

				<div className='hidden sm:flex flex-col w-full md:gap-x-12 my-12 md:my-24 xl:my-48'>
					<ProjectStruct.Stack>
						<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
							Features
						</h4>
						<ul className='flex gap-6 my-6 flex-wrap'>
							{project.features.map(feature => (
								<li
									key={project.id}
									className='text-primary-foreground bg-gradient-to-r from-primary to-secondary p-0.5 md:p-1 text-center flex-auto'
								>
									{feature}
								</li>
							))}
						</ul>
					</ProjectStruct.Stack>
					<ProjectStruct.Stack>
						<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
							Technologies
						</h4>
						<ul className='flex gap-6 my-6 flex-wrap'>
							{project.technologies.map(technology => (
								<li
									key={project.id}
									className='text-primary-foreground bg-gradient-to-r from-secondary to-primary p-0.5 md:p-1 text-center flex-auto '
								>
									{technology}
								</li>
							))}
						</ul>
					</ProjectStruct.Stack>
				</div>
			</ProjectStruct.Content>
			{/* project footer */}
			<ProjectStruct.Footer className='w-full md:w-[650px]'>
				<a
					href={project.liveDemo}
					className={cn(
						buttonVariants(),
						'block w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
					)}
				>
					Live Demo
				</a>
				<a
					href={project.githubRepo}
					className={cn(
						buttonVariants(),
						'block w-full bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
					)}
				>
					GitHub Repo
				</a>
			</ProjectStruct.Footer>
		</ProjectStruct.Container>
	);
}
