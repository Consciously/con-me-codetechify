'use client';

import { Fragment } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/projects/actions/actions';
import ProjectItem from '@/components/ui/project/project-item';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ContainerStruct from '@/components/ui/custom-container-layout';

const LIMIT = 4;

export default function ProjectsPageData() {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ['projects'],
		queryFn: async ({ pageParam = undefined }) =>
			await getProjects(pageParam, LIMIT),
		getNextPageParam: lastPage => lastPage.nextCursor,
		initialPageParam: 0,
	});

	if (status === 'pending') return <div>Loading...</div>;

	if (status === 'error') return <div>Error: {error.message}</div>;

	return (
		<>
			{data?.pages.map((page, pageIndex) => (
				<Fragment key={pageIndex}>
					{page.projects.map(project => (
						<div
							key={project.id}
							className={cn(
								'col-span-full md:col-span-6 lg:col-span-4 xl:col-span-3',
							)}
						>
							<ProjectItem project={project} />
						</div>
					))}
				</Fragment>
			))}
			<ContainerStruct.Content className='md:col-span-6 mx-auto'>
				<Button
					onClick={() => fetchNextPage()}
					disabled={!hasNextPage || isFetchingNextPage}
					className='w-full bg-transparent from-primary to-secondary bg-gradient-to-tr shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
				>
					{isFetchingNextPage
						? 'Loading more...'
						: hasNextPage
						? 'Load More'
						: 'Nothing more to load'}
				</Button>
			</ContainerStruct.Content>
			<div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
		</>
	);
}
