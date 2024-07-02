'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/(root)/projects/action/action';
import { TILE_LAYOUTS } from '@/constants/constants';

export default function ProjectsData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className='grid grid-cols-1 grid-rows-12 md:grid-cols-6 lg:grid-cols-12 gap-6'>
			{data?.map((project, index) => {
				const layout = TILE_LAYOUTS[index] || {
					className: 'col-span-full row-span-1',
				};

				return (
					<div key={project.id} className={layout.className}>
						<h2>{project.title}</h2>
						<p>{project.description}</p>
					</div>
				);
			})}

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
