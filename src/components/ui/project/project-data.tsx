'use client';

import { usePathname } from 'next/navigation';
import { useQuery } from 'convex/react';
import { anyApi, type FunctionReference } from 'convex/server';
import ProjectItem from '@/components/ui/project/project-item';
import { Layout } from '@/components/ui/custom-container-structure';
import { Skeleton } from '@/components/ui/skeleton';
import ProjectStruct from '@/components/ui/custom-project-structure';
import type { ProjectDoc } from '@/types/project';

type ProjectDataProps = {
	isHomepage?: boolean;
};

export default function ProjectData({ isHomepage }: ProjectDataProps) {
	const pathname = usePathname();
	const isHome = isHomepage ?? false;

	const projects = useQuery(
		anyApi.projects.list as FunctionReference<'query'>,
		{ home: isHome },
	) as ProjectDoc[] | undefined;
	const isLoading = projects === undefined;

	if (isLoading)
		return (
			<Layout.GridItem fullSpan>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
					{Array.from({ length: isHome ? 5 : 6 }).map((_, idx) => (
						<ProjectStruct.Container key={idx} className='p-6'>
							<div className='space-y-4'>
								<Skeleton className='h-7 w-3/4 mx-auto' />
								<Skeleton className='h-4 w-1/2 mx-auto' />
								<Skeleton className='h-20 w-full' />
								<Skeleton className='aspect-square w-full' />
							</div>
						</ProjectStruct.Container>
					))}
				</div>
			</Layout.GridItem>
		);

	if (!projects || projects.length === 0) {
		return (
			<Layout.GridItem fullSpan>
				<div className='mx-auto w-full max-w-xl'>
					<div className='rounded-xl border border-primary/40 bg-background/40 p-6 text-center'>
						<p className='text-base font-semibold text-foreground'>
							No projects yet.
						</p>
						<p className='mt-1 text-sm text-foreground/70'>
							Add your first project and it will show up here.
						</p>
					</div>
				</div>
			</Layout.GridItem>
		);
	}

	const showFeatured = isHome && pathname !== '/projects';

	return (
		<Layout.GridItem fullSpan>
			{/* Modern responsive grid:
          - mobile: 1 column
          - tablet: 2 columns
          - desktop: 3 columns
          - large desktop: 4 columns
      */}
			<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{projects.map((project, index) => {
					const isFeatured = showFeatured && index === 0;
					return (
						<div
							key={project._id}
							className={isFeatured ? 'md:col-span-2 lg:col-span-2' : undefined}
						>
							<ProjectItem
								project={project}
								isLarge={isFeatured}
							/>
						</div>
					);
				})}
			</div>
		</Layout.GridItem>
	);
}
