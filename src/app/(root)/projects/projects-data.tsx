'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/(root)/projects/action/action';
import { TILE_LAYOUTS } from '@/constants/constants';
import { cn, formatDate } from '@/lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function ProjectsData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<div
			className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6'
			style={{ gridAutoRows: 'minmax(150px, auto)' }}
		>
			{data?.map((project, index) => {
				const layout = TILE_LAYOUTS[index] || {
					className: 'col-span-full row-span-1',
				};

				return (
					<div
						key={project.id}
						className={cn(layout.className, 'h-full')}
						style={{ gridAutoRows: 'minmax(150px, auto)' }}
					>
						{layout.size === 'very-big' && (
							<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
								<CardHeader>
									<CardTitle className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6'>
										<div className='col-span-full lg:col-span-6'>
											<CardDescription className='text-lg/relaxed text-primary-foreground'>
												{project.description}
												{index + 1}
											</CardDescription>
										</div>
										<div className='col-span-full lg:col-span-6'>
											Right side content
										</div>
									</div>
								</CardContent>
							</Card>
						)}
						{layout.size === 'big' && (
							<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
								<CardHeader>
									<CardTitle className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6'>
										<div className='col-span-full lg:col-span-6'>
											<CardDescription className='text-lg/relaxed text-primary-foreground'>
												{project.description}
												{index + 1}
											</CardDescription>
										</div>
										<div className='col-span-full lg:col-span-6'>
											Right side content
										</div>
									</div>
								</CardContent>
							</Card>
						)}
						{layout.size === 'normal' && (
							<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
								<CardHeader>
									<CardTitle className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
										{project.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6'>
										<div className='col-span-full'>
											<CardDescription className='text-lg/relaxed text-primary-foreground'>
												{project.description}
												{index + 1}
											</CardDescription>
										</div>
										<div className='col-span-full'>Right side content</div>
									</div>
								</CardContent>
							</Card>
						)}
					</div>
				);
			})}
		</div>
	);
}
