'use client';

import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@/app/(root)/projects/action/action';
import { TILE_LAYOUTS } from '@/constants/constants';
import { cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectStruct from '@/components/ui/project/custom-project-layout';

export default function ProjectsData() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => await getProjects(),
	});

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<ContainerStruct.Layout className='auto-rows-150 gap-6'>
			{data?.map((project, index) => {
				const layout = TILE_LAYOUTS[index] || {
					className: 'col-span-full row-span-1',
				};

				return (
					<div key={project.id} className={cn(layout.className, 'h-full')}>
						{layout.size === 'very-big' && (
							<ProjectStruct.Container className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
								<ContainerStruct.Layout>
									<ContainerStruct.Content>
										<ProjectStruct.Header>
											<ProjectStruct.Title className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
												{project.title}
											</ProjectStruct.Title>
										</ProjectStruct.Header>
									</ContainerStruct.Content>
									<ContainerStruct.Content>
										<ProjectStruct.Description className='text-lg/relaxed text-primary-foreground text-center'>
											{project.description}
										</ProjectStruct.Description>
									</ContainerStruct.Content>
								</ContainerStruct.Layout>
								<ProjectStruct.Content>
									<ContainerStruct.Layout>
										<ContainerStruct.Content className='mx-auto pt-12'>
											<div>
												<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
													Features
												</h4>
											</div>
											<div>
												<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
													Technologies
												</h4>
											</div>
										</ContainerStruct.Content>

										<ContainerStruct.Content className='mx-auto pt-12 space-x-6'>
											<a
												href={project.liveDemo}
												className={cn(
													buttonVariants(),
													'bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
												)}
											>
												Live Demo
											</a>
											<a
												href={project.githubRepo}
												className={cn(
													buttonVariants(),
													'bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
												)}
											>
												GitHub Repo
											</a>
										</ContainerStruct.Content>
									</ContainerStruct.Layout>
								</ProjectStruct.Content>
							</ProjectStruct.Container>
						)}
						{layout.size === 'big' && (
							<ProjectStruct.Container className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
								<ProjectStruct.Header>
									<ProjectStruct.Title className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
										{project.title}
									</ProjectStruct.Title>
								</ProjectStruct.Header>
								<ProjectStruct.Content>
									<ContainerStruct.Layout className='gap-6'>
										<ContainerStruct.Content className='lg:col-span-6'>
											<ProjectStruct.Description className='text-lg/relaxed text-primary-foreground'>
												{project.description}
											</ProjectStruct.Description>
										</ContainerStruct.Content>
										<ContainerStruct.Content className='lg:col-span-6'>
											Right side content
										</ContainerStruct.Content>
									</ContainerStruct.Layout>
								</ProjectStruct.Content>
							</ProjectStruct.Container>
						)}
						{layout.size === 'normal' && (
							<ProjectStruct.Container className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
								<ProjectStruct.Header>
									<ProjectStruct.Title className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
										{project.title}
									</ProjectStruct.Title>
								</ProjectStruct.Header>
								<ProjectStruct.Content>
									<ContainerStruct.Layout className='gap-6'>
										<ContainerStruct.Content>
											<ProjectStruct.Description className='text-lg/relaxed text-primary-foreground'>
												{project.description}
											</ProjectStruct.Description>
										</ContainerStruct.Content>
										<div className='col-span-full'>Right side content</div>
									</ContainerStruct.Layout>
								</ProjectStruct.Content>
							</ProjectStruct.Container>
						)}
					</div>
				);
			})}
		</ContainerStruct.Layout>
	);
}
