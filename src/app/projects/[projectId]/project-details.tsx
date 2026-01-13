'use client';

import { useRouter } from 'next/navigation';
import ProjectStruct from '@/components/ui/custom-project-structure';
import ProjectHeader from '@/components/ui/project/project-header';
import ProjectContent from '@/components/ui/project/project-content';
import ProjectDescription from '@/components/ui/project/project-description';
import ProjectImagesContainer from '@/components/ui/project/project-images-container';
import ProjectStack from '@/components/ui/project/project-stack';
import ProjectFooter from '@/components/ui/project/project-footer';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { getProjectHandler } from '@/app/projects/actions/actions';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function ProjectDetails({ projectId }: { projectId: string }) {
	const router = useRouter();

	const {
		data: project,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['project', projectId],
		queryFn: async () => {
			try {
				return await getProjectHandler(projectId);
			} catch (err) {
				// Handle 401 errors gracefully, so it doesn't disrupt rendering
				if (err instanceof Response && err.status === 401) {
					// Log the error for debugging purposes
					console.log('401 Unauthorized error caught');
					return null; // Return null for non-authenticated users
				}
				// Handle other errors if necessary
				throw err;
			}
		},
	});

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

	if (error) {
		return (
			<ProjectStruct.Container className='p-6 md:p-8'>
				<div className='text-center space-y-4'>
					<p className='text-sm text-destructive'>Failed to load project.</p>
					<button
						type='button'
						onClick={() => router.push('/projects')}
						className={cn(
							buttonVariants({ variant: 'outline', size: 'sm' }),
							'border-primary bg-transparent hover:bg-transparent hover:text-primary',
						)}
					>
						Back to projects
					</button>
				</div>
			</ProjectStruct.Container>
		);
	}

	if (!project) {
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
				<ProjectHeader project={project} className='w-full md:w-auto' />
				<ProjectContent>
					<div className='grid grid-cols-12 gap-2 md:gap-4 xl:gap-8'>
						<div className='col-span-full'>
							<ProjectDescription project={project} className='col-span-full' />
						</div>
						<div className='col-span-full grid grid-cols-12 gap-2 sm:gap-x-4 sm:gap-y-2 md:gap-x-8 md:gap-y-4 xl:gap-x-16 xl:gap-y-8 @container'>
							<div className='col-span-full md:col-span-6 @sm:max-w-[28rem] @sm:mx-auto'>
								<ProjectImagesContainer project={project} />
							</div>
							<div className='col-span-full md:col-span-6'>
								<ProjectStack project={project} />
							</div>
						</div>
					</div>
				</ProjectContent>

				<ProjectFooter className='w-full @xl/container:w-2/3 flex-row items-center justify-center gap-6 mx-auto'>
					<a
						href={project.liveDemo}
						className={cn(
							buttonVariants({
								size: 'sm',
							}),
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
							buttonVariants({
								size: 'sm',
							}),
							'flex justify-center items-center w-full bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
						)}
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub Repo
					</a>
				</ProjectFooter>
			</ProjectStruct.Container>
		</>
	);
}
