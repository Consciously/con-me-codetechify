'use client';

import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getProjectsHandler } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { cn, getProjectSize } from '@/lib/utils';
import { Layout } from '@/components/ui/custom-container-structure';
import { Loader2 } from 'lucide-react';

type ProjectDataProps = {
	isHomepage?: boolean;
};

export default function ProjectData({ isHomepage = false }: ProjectDataProps) {
	const pathname = usePathname();

	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjectsHandler(isHomepage),
	});

	const projects = data || [];
	const projectSize = getProjectSize(data || []);

	if (isLoading)
		return (
			<Layout.GridItem fullSpan>
				<div className='flex justify-center items-center'>
					<Loader2 className='w-6 h-6 text-primary animate-spin' />
				</div>
			</Layout.GridItem>
		);

	if (error)
		return <Layout.GridItem fullSpan>Error: {error.message}</Layout.GridItem>;

	return (
		<>
			{projects.length > 0 ? (
				projects.map((project, index) => {
					const isLarge = isHomepage && project.importance === 5 && index === 0;
					return (
						<Layout.GridItem
							key={project.id}
							className={cn('col-span-full', {
								'md:col-span-6 lg:col-span-4 xl:col-span-3':
									projectSize(project) === 'small' || pathname === '/projects',
								'col-span-full lg:col-span-full xl:col-span-full': isLarge,
							})}
						>
							<ProjectItem
								project={project}
								projectSize={projectSize}
								isLarge={isLarge}
							/>
						</Layout.GridItem>
					);
				})
			) : (
				<Layout.GridItem fullSpan>No projects found</Layout.GridItem>
			)}
		</>
	);
}
