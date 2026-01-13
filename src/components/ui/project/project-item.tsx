'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ProjectHeader from './project-header';
import ProjectDescription from './project-description';
import ProjectImagesContainer from './project-images-container';
import ProjectStack from './project-stack';
import ProjectContent from './project-content';
import { Project } from '@prisma/client';
import ProjectStruct from '../custom-project-structure';
import { Layout } from '../custom-container-structure';
import { Card, CardContent, CardHeader, CardTitle } from '../card';

type ProjectItemPropsType = {
	project: Project;
	projectSize?: (project: Project) => 'large' | 'small';
	isLarge?: boolean;
};

export default function ProjectItem({
	project,
	projectSize,
	isLarge,
}: ProjectItemPropsType) {
	return (
		<>
			{isLarge ? (
				<Layout.Container isCentered size='xl' noSpacing>
					<ProjectStruct.Container className='@container/container p-6 md:p-8'>
						<Layout.Grid gap={{ sm: 4, md: 8 }} noSpacing>
							<Layout.GridItem colSpan={{ sm: 12, md: 6 }} noSpacing>
							<ProjectHeader
								project={project}
								projectSize={projectSize}
								className='w-full md:w-auto'
							/>
							<ProjectImagesContainer
								project={project}
								className='rounded-lg'
							/>

							<ProjectStack project={project} />
							</Layout.GridItem>

							<Layout.GridItem colSpan={{ sm: 12, md: 6 }} noSpacing>
							<Card className='bg-transparent border-primary mb-4 md:mb-8'>
								<CardHeader>
									<CardTitle className='text-primary'>Project Links</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<a
										href={project.githubRepo}
										className={cn(
											buttonVariants(),
											'w-full text-background hover:bg-primary hover:text-white',
										)}
										target='_blank'
										rel='noopener noreferrer'
									>
										View on GitHub
									</a>
									<a
										href={project.liveDemo}
										className={cn(
											buttonVariants({ variant: 'outline' }),
											'w-full bg-transparent border-primary hover:bg-transparent hover:text-primary',
										)}
										target='_blank'
										rel='noopener noreferrer'
									>
										Live Demo
									</a>
								</CardContent>
							</Card>

							<Card className='bg-transparent border-primary'>
								<CardHeader>
									<CardTitle className='text-primary'>
										Project Description
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-primary-foreground'>
										{project.description}
									</p>
								</CardContent>
							</Card>
							</Layout.GridItem>
						</Layout.Grid>
					</ProjectStruct.Container>
				</Layout.Container>
			) : (
				<ProjectStruct.Container className='@container/container p-6'>
					<div className='space-y-4'>
						<ProjectHeader project={project} className='p-0' />

						<ProjectContent className='grid grid-cols-1 p-0'>
							<div className='col-span-full space-y-4'>
								<ProjectDescription
									project={project}
									className='p-0 line-clamp-6'
								/>
								<ProjectImagesContainer project={project} variant='preview' />
							</div>
						</ProjectContent>

						<div className='pt-2'>
							<Link
								href={`/projects/${project.id}`}
								className={cn(
									buttonVariants({ variant: 'outline', size: 'sm' }),
									'w-full border-primary bg-transparent hover:bg-transparent hover:text-primary',
								)}
							>
								View project
							</Link>
						</div>
					</div>
				</ProjectStruct.Container>
			)}
		</>
	);
}
