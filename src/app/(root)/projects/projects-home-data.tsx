'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjectsHandler } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { cn, getProjectSize } from '@/lib/utils';
import { Layout } from '@/components/ui/custom-container-structure';

type ProjectsHomeDataProps = {
	isHomepage: boolean;
};

export default function ProjectsHomeData({
	isHomepage,
}: ProjectsHomeDataProps) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjectsHandler(isHomepage),
	});

	const projects = data || [];
	const projectSize = getProjectSize(data || []);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			{projects.length > 0 ? (
				data?.map(project => {
					return (
						<Layout.GridItem
							key={project.id}
							className={cn('col-span-full', {
								'md:col-span-6 lg:col-span-4 xl:col-span-3':
									projectSize(project) === 'small',
							})}
						>
							<ProjectItem project={project} projectSize={projectSize} />
						</Layout.GridItem>
					);
				})
			) : (
				<div>No projects found</div>
			)}
		</>
	);
}
