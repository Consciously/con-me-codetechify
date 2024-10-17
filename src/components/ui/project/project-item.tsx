'use client';

import Links from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ProjectHeader from './project-header';
import ProjectDescription from './project-description';
import ProjectImagesContainer from './project-images-container';
import ProjectStack from './project-stack';
// import ProjectContainer from './project-container';
import ProjectContent from './project-content';
import ProjectFooter from './project-footer';
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
				<ProjectStruct.Container className='p-0 @container/container'>
					<ProjectHeader
						project={project}
						projectSize={projectSize}
						className='w-full md:w-auto'
					/>
					<ProjectContent>
						<Layout.Grid>
							<Layout.GridItem colSpan={{ sm: 12, md: 6 }}>
								<ProjectImagesContainer
									project={project}
									className='rounded-lg'
								/>

								<ProjectStack project={project} />
							</Layout.GridItem>

							<Layout.GridItem colSpan={{ sm: 12, md: 6 }}>
								<div className='relative top-8'>
									<Layout.Container className='w-1/2 ml-auto'>
										<Card className='bg-transparent border-primary'>
											<CardHeader>
												<CardTitle className='text-primary'>
													Project Links
												</CardTitle>
											</CardHeader>
											<CardContent className='space-y-4'>
												<Links
													href={project.githubRepo}
													passHref
													className={cn(
														buttonVariants(),
														'w-full hover:bg-secondary hover:text-background',
													)}
													target='_blank'
													rel='noopener noreferrer'
												>
													View on GitHub
												</Links>
												<Links
													href={project.liveDemo}
													passHref
													className={cn(
														buttonVariants({ variant: 'outline' }),
														'w-full bg-transparent border-primary hover:border-secondary hover:bg-transparent hover:text-primary-foreground',
													)}
													target='_blank'
													rel='noopener noreferrer'
												>
													Live Demo
												</Links>
											</CardContent>
										</Card>
									</Layout.Container>
									<Layout.Container className='w-1/2 ml-auto'>
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
									</Layout.Container>
								</div>
							</Layout.GridItem>
						</Layout.Grid>
					</ProjectContent>
				</ProjectStruct.Container>
			) : (
				<ProjectStruct.Container>
					<ProjectHeader
						project={project}
						className='w-full mb-6 md:mb-12 p-0'
					/>

					<ProjectContent className='grid grid-cols-1'>
						<div className='col-span-full'>
							<ProjectDescription
								project={project}
								className='mb-6 md:mb-12 p-0 line-clamp-8'
							/>
							<ProjectImagesContainer project={project} />
						</div>
					</ProjectContent>
				</ProjectStruct.Container>
			)}
		</>
	);
}
