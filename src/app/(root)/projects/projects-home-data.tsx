'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/(root)/projects/action/action';
import ProjectItem from '@/components/ui/project/project-item';
import { cn, getProjectSize } from '@/lib/utils';
import Block from '@/components/ui/custom-block-structure';

export default function ProjectsHomeData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	const projects = data || [];
	const projectSize = getProjectSize(data || []);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<Block>
			{projects.length > 0 ? (
				data?.map(project => {
					return (
						<Block.Item
							key={project.id}
							className={cn('col-span-full', {
								'md:col-span-6 lg:col-span-4 xl:col-span-3':
									projectSize(project) === 'small',
							})}
						>
							<ProjectItem project={project} projectSize={projectSize} />
						</Block.Item>
					);
				})
			) : (
				<div>No projects found</div>
			)}
		</Block>
	);
}
