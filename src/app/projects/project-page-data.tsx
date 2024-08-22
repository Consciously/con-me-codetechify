'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { cn } from '@/lib/utils';
import Block from '@/components/ui/custom-block-structure';

export default function ProjectsHomeData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	const projects = data || [];

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<Block>
			{projects.length > 0 ? (
				data?.map(project => {
					return (
						<Block.Item
							key={project.id}
							className='md:col-span-6 lg:col-span-4 xl:col-span-3'
						>
							<ProjectItem project={project} />
						</Block.Item>
					);
				})
			) : (
				<div>No projects found</div>
			)}
		</Block>
	);
}
