'use client';

import ProjectStruct from '@/components/ui/custom-project-structure';
import ProjectHeader from '@/components/ui/project/project-header';
import ProjectContent from '@/components/ui/project/project-content';
import ProjectDescription from '@/components/ui/project/project-description';
import ProjectImagesContainer from '@/components/ui/project/project-images-container';
import ProjectStack from '@/components/ui/project/project-stack';
import ProjectFooter from '@/components/ui/project/project-footer';
import { cn } from '@/lib/utils';
import { useQuery } from 'convex/react';
import { anyApi, type FunctionReference } from 'convex/server';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import type { ProjectDoc } from '@/types/project';

export default function ProjectDetails({ projectId }: { projectId: string }) {
	const project = useQuery(
		anyApi.projects.getById as FunctionReference<'query'>,
		{ id: projectId as unknown as string },
	) as ProjectDoc | null | undefined;
	const isLoading = project === undefined;

	if (isLoading) {
		return (
			<ProjectStruct.Container className='p-6 md:p-8'>
				<div className='space-y-6'>
					<div className='space-y-3'>
						<Skeleton className='h-8 w-2/3 mx-auto' />
						<Skeleton className='h-4 w-1/2 mx-auto' />
					</div>
					<Skeleton className='h-24 w-full' />
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-full md:col-span-6'>
							<Skeleton className='aspect-square w-full' />
						</div>
						<div className='col-span-full md:col-span-6 space-y-3'>
							<Skeleton className='h-6 w-1/3' />
							<Skeleton className='h-20 w-full' />
							<Skeleton className='h-6 w-1/2' />
							<Skeleton className='h-16 w-full' />
						</div>
					</div>
				</div>
			</ProjectStruct.Container>
		);
	}

	// Convex hook doesn't surface thrown errors in the same shape here;
	// treat null as "not found" and rely on dev console for config issues.
	if (project === null) {
		return (
			<ProjectStruct.Container className='p-6 md:p-8'>
				<div className='text-center space-y-4'>
					<p className='text-sm text-muted-foreground'>Project not found.</p>
					<Link
						href='/projects'
						className={cn(
							buttonVariants({ variant: 'outline', size: 'sm' }),
							'border-primary bg-transparent hover:bg-transparent hover:text-primary',
						)}
					>
						Back to projects
					</Link>
				</div>
			</ProjectStruct.Container>
		);
	}

	return (
		<>
			<ProjectStruct.Container className='p-0 @container/container'>
				{/* Header + actions */}
				<div className='px-6 pt-6 md:px-8 md:pt-8'>
					<ProjectHeader project={project} className='p-0 w-full' />

					<div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-xl'>
						<a
							href={project.liveDemo}
							className={cn(
								buttonVariants({ size: 'sm' }),
								'flex justify-center items-center w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
							)}
							target='_blank'
							rel='noopener noreferrer'
						>
							Live Demo
						</a>
						<a
							href={project.githubRepo}
							className={cn(
								buttonVariants({ variant: 'outline', size: 'sm' }),
								'w-full border-primary bg-transparent hover:bg-transparent hover:text-primary text-center',
							)}
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub Repo
						</a>
					</div>

					<div className='mt-6'>
						<ProjectDescription project={project} className='p-0' />
					</div>
				</div>

				<ProjectContent className='pt-6 md:pt-8'>
					{/* Layout:
              - mobile: stack
              - tablet: 2 columns (gallery | stack)
              - desktop: 7/5 split with more spacing
          */}
					<div className='grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8'>
						<div className='md:col-span-7'>
							<ProjectImagesContainer project={project} />
						</div>
						<div className='md:col-span-5'>
							<div className='rounded-xl border border-primary/20 bg-background/30 p-4 md:p-5'>
								<ProjectStack project={project} />
							</div>
						</div>
					</div>
				</ProjectContent>

				<ProjectFooter className='w-full flex-row items-center justify-center gap-6 mx-auto pt-0'>
					<span className='sr-only'>Project actions moved above.</span>
				</ProjectFooter>
			</ProjectStruct.Container>
		</>
	);
}
