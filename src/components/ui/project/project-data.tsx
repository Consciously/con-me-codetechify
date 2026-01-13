'use client';

import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getProjectsHandler } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { cn, getProjectSize } from '@/lib/utils';
import { Layout } from '@/components/ui/custom-container-structure';
import { Skeleton } from '@/components/ui/skeleton';
import ProjectStruct from '@/components/ui/custom-project-structure';

type ProjectDataProps = {
	isHomepage?: boolean;
};

export default function ProjectData({ isHomepage }: ProjectDataProps) {
	const pathname = usePathname();
	const isHome = isHomepage ?? false;

	const {
		data: projects,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['projects', { isHome }],
		queryFn: async () => await getProjectsHandler(isHome),
	});

	const projectSize = getProjectSize(projects || []);

	if (isLoading)
		return (
			<Layout.GridItem fullSpan>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
					{Array.from({ length: isHome ? 5 : 6 }).map((_, idx) => (
						<ProjectStruct.Container key={idx} className='p-6'>
							<div className='space-y-4'>
								<Skeleton className='h-7 w-3/4 mx-auto' />
								<Skeleton className='h-4 w-1/2 mx-auto' />
								<Skeleton className='h-20 w-full' />
								<Skeleton className='aspect-square w-full' />
							</div>
						</ProjectStruct.Container>
					))}
				</div>
			</Layout.GridItem>
		);

	if (error)
		return (
			<Layout.GridItem fullSpan>
				<div className='text-center text-sm text-destructive'>
					Failed to load projects.
				</div>
			</Layout.GridItem>
		);

	if (!projects || projects.length === 0) {
		return (
			<Layout.GridItem fullSpan>
				<div className='text-center text-sm text-muted-foreground'>
					No projects yet.
				</div>
			</Layout.GridItem>
		);
	}

	return (
		<>
			{projects.map((project, index) => {
				const isLarge =
					isHome && projectSize(project) === 'large' && index === 0;
				return (
					<Layout.GridItem
						key={project.id}
						className={cn('col-span-full', {
							'md:col-span-6 lg:col-span-4':
								projectSize(project) === 'small' || pathname === '/projects',
						})}
					>
						<ProjectItem
							project={project}
							projectSize={projectSize}
							isLarge={isLarge}
						/>
					</Layout.GridItem>
				);
			})}
		</>
	);
}
