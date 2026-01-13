'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ProjectHeader from './project-header';
import ProjectDescription from './project-description';
import ProjectImagesContainer from './project-images-container';
import ProjectStack from './project-stack';
import ProjectContent from './project-content';
import ProjectStruct from '../custom-project-structure';
import { Card, CardContent, CardHeader, CardTitle } from '../card';
import type { ProjectDoc } from '@/types/project';

type ProjectItemPropsType = {
	project: ProjectDoc;
	isLarge?: boolean;
};

export default function ProjectItem({
	project,
	isLarge,
}: ProjectItemPropsType) {
	return (
		<>
			{isLarge ? (
				<ProjectStruct.Container className='@container/container p-6 md:p-8'>
					{/* Featured layout:
            - mobile: stacked
            - tablet: 2-column
            - desktop: 7/5 split with stronger hierarchy
          */}
					<div className='grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10'>
						<div className='md:col-span-7'>
							<ProjectHeader project={project} className='p-0' />
							<div className='mt-4 space-y-4'>
								<ProjectDescription project={project} className='p-0' />
								<ProjectImagesContainer project={project} className='rounded-lg' />
							</div>
						</div>

						<aside className='md:col-span-5 space-y-4'>
							<Card className='bg-transparent border-primary'>
								<CardHeader>
									<CardTitle className='text-primary'>Links</CardTitle>
								</CardHeader>
								<CardContent className='space-y-3'>
									<a
										href={project.liveDemo}
										className={cn(
											buttonVariants(),
											'w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/40 dark:shadow-zinc-100/10 text-center',
										)}
										target='_blank'
										rel='noopener noreferrer'
									>
										Live Demo
									</a>
									<a
										href={project.githubRepo}
										className={cn(
											buttonVariants({ variant: 'outline' }),
											'w-full bg-transparent border-primary hover:bg-transparent hover:text-primary',
										)}
										target='_blank'
										rel='noopener noreferrer'
									>
										GitHub Repo
									</a>
								</CardContent>
							</Card>

							<div className='rounded-xl border border-primary/20 bg-background/30 p-4'>
								<ProjectStack project={project} />
							</div>
						</aside>
					</div>
				</ProjectStruct.Container>
			) : (
				<ProjectStruct.Container className='@container/container p-5 sm:p-6'>
					{/* Card layout:
            - mobile: stacked
            - tablet: horizontal card (image left, text right)
            - desktop: roomier spacing + clamp changes
          */}
					<div className='grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6'>
						<div className='md:col-span-5'>
							<ProjectImagesContainer project={project} variant='preview' />
						</div>
						<div className='md:col-span-7 flex flex-col'>
							<ProjectHeader project={project} className='p-0' />

							<ProjectContent className='p-0'>
								<ProjectDescription
									project={project}
									className='p-0 line-clamp-4 md:line-clamp-5 lg:line-clamp-6'
								/>
							</ProjectContent>

							<div className='mt-4'>
								<Link
										href={`/projects/${project._id}`}
									className={cn(
										buttonVariants({ variant: 'outline', size: 'sm' }),
										'w-full md:w-fit border-primary bg-transparent hover:bg-transparent hover:text-primary',
									)}
								>
									View project
								</Link>
							</div>
						</div>
					</div>
				</ProjectStruct.Container>
			)}
		</>
	);
}
