'use client';

import { Button, buttonVariants } from '@/components/ui/button';
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
import { getProjectById } from '../actions/actions';

export default function ProjectDetails({ projectId }: { projectId: string }) {
	const router = useRouter();

	const {
		data: project,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['project'],
		queryFn: async () => {
			try {
				return await getProjectById(projectId);
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
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error loading project details</div>;
	}

	if (!project) {
		return <div>No project found</div>;
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
					>
						GitHub Repo
					</a>
				</ProjectFooter>
			</ProjectStruct.Container>

			<Button
				className='w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
				onClick={() => router.push(`/admin/${projectId}`)}
			>
				Redirect...
			</Button>
		</>
	);
}
