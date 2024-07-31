'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { cn, getProjectSize } from '@/lib/utils';

export default function ProjectsPageData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	const projectSize = getProjectSize(data!);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			{data?.map(project => {
				return (
					<div
						key={project.id}
						className={cn(
							'col-span-full md:col-span-6 lg:col-span-4 xl:col-span-3',
						)}
					>
						<ProjectItem project={project} projectSize={projectSize!} />
					</div>
				);
			})}
		</>
	);
}
