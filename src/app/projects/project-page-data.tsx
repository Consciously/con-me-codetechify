'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ProjectsHomeData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	const projects = data || [];

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }}>
			{projects.length > 0 ? (
				data?.map(project => {
					return (
						<Layout.GridItem colSpan={{ sm: 1, md: 2, xl: 3 }} key={project.id}>
							<ProjectItem project={project} />
						</Layout.GridItem>
					);
				})
			) : (
				<div>No projects found</div>
			)}
		</Layout.Grid>
	);
}
