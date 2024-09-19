'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ProjectHeader from './project-header';
import ProjectDescription from './project-description';
import ProjectImagesContainer from './project-images-container';
import ProjectStack from './project-stack';
import ProjectContainer from './project-container';
import ProjectContent from './project-content';
import ProjectFooter from './project-footer';
import { Project } from '@prisma/client';
import ProjectStruct from '../custom-project-structure';

type ProjectItemPropsType = {
	project: Project;
	projectSize?: (project: Project) => 'large' | 'small';
	isLarge?: boolean;
};

export default function ProjectItem({
	project,
	projectSize,
	isLarge = false,
}: ProjectItemPropsType) {
	return (
		<>
			{isLarge ? (
				<ProjectStruct.Container className='p-0 @container/container'>
					<ProjectHeader
						project={project}
						projectSize={projectSize}
						className='w-full md:w-auto'
					/>
					<ProjectContent>
						<div className='grid grid-cols-12 gap-2 md:gap-4 xl:gap-8'>
							<div className='col-span-full'>
								<ProjectDescription
									project={project}
									className='col-span-full'
								/>
							</div>
							<div className='col-span-full grid grid-cols-12 gap-2 sm:gap-x-4 sm:gap-y-2 md:gap-x-8 md:gap-y-4 xl:gap-x-16 xl:gap-y-8 @container'>
								<div className='col-span-full md:col-span-6 @sm:max-w-[28rem] @sm:mx-auto'>
									<ProjectImagesContainer project={project} />
								</div>
								<div className='col-span-full md:col-span-6'>
									<ProjectStack project={project} />
								</div>
							</div>
						</div>
					</ProjectContent>

					<ProjectFooter className='w-full @xl/container:w-2/3 flex-row items-center justify-center gap-6 mx-auto'>
						<a
							href={project.liveDemo}
							className={cn(
								buttonVariants({
									size: 'sm',
								}),
								'flex justify-center items-center w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
							)}
						>
							Live Demo
						</a>
						<a
							href={project.githubRepo}
							className={cn(
								buttonVariants({
									size: 'sm',
								}),
								'flex justify-center items-center w-full bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
							)}
						>
							GitHub Repo
						</a>
					</ProjectFooter>
				</ProjectStruct.Container>
			) : (
				<ProjectStruct.Container>
					<ProjectHeader
						project={project}
						className='w-full mb-6 md:mb-12 p-0'
					/>

					<ProjectContent className='grid grid-cols-1'>
						<div className='col-span-full'>
							<ProjectDescription
								project={project}
								className='mb-6 md:mb-12 p-0 line-clamp-8'
							/>
							<ProjectImagesContainer project={project} />
						</div>
					</ProjectContent>
				</ProjectStruct.Container>
			)}
		</>
	);
}
