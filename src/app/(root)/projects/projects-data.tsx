'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/action/action';

export default function ProjectsData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: getProjects,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className='grid grid-cols-1 grid-rows-12 md:grid-cols-6 lg:grid-cols-12 gap-6'>
			<ul className='col-span-full'>
				{data?.map(project => (
					<li key={project.id}>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
			{/* <div className='col-span-full row-span-3 md:col-span-3 lg:col-span-8'>
				Tile 1
			</div>

			<div className='col-span-full md:col-span-3 lg:col-span-4 row-span-2'>
				Tile 2
			</div>
			<div className='col-span-full md:col-span-3 lg:col-span-4 row-span-2'>
				Tile 3
			</div>

			<div className='col-span-full row-span-1 md:col-span-3 lg:col-span-4'>
				Tile 4
			</div>
			<div className='col-span-full row-span-1 md:col-span-3 lg:col-span-4'>
				Tile 5
			</div>
			<div className='col-span-full row-span-1 md:col-span-3 lg:col-span-4'>
				Tile 6
			</div>
			<div className='col-span-full row-span-1 md:col-span-3 lg:col-span-4'>
				Tile 7
			</div>
			<div className='col-span-full row-span-1 md:col-span-3 lg:col-span-4'>
				Tile 8
			</div> */}
		</div>
	);
}
