'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/(root)/projects/action/action';
import { cn } from '@/lib/utils';

import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectItem from '@/components/ui/project/project-item';

export default function ProjectsData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<ContainerStruct.Layout className='auto-rows-150 gap-6'>
			{data?.map(project => {
				return (
					<div key={project.id} className='col-span-full row-span-1'>
						<ProjectItem project={project} />
					</div>
				);
			})}
		</ContainerStruct.Layout>
	);
}
