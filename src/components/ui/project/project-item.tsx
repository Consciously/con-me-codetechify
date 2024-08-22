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
import Block from '../custom-block-structure';

type ProjectItemPropsType = {
	project: Project;
	projectSize?: (project: Project) => 'large' | 'small';
};

export default function ProjectItem({
	project,
	projectSize,
}: ProjectItemPropsType) {
	return (
		<>
			{projectSize && projectSize(project) === 'large' ? (
				<ProjectContainer className='w-full h-full'>
					<ProjectHeader
						project={project}
						projectSize={projectSize}
						className='w-full md:w-auto mb-12 md:mb-24 xl:mb-48'
					/>

					<ProjectContent className='grid grid-cols-8 gap-12 mb-6 md:mb-12 xl:mb-24'>
						<div className='col-span-full sm:col-span-4 xl:col-span-2 grid grid-cols-2'>
							<ProjectDescription
								project={project}
								className='col-span-full xl:absolute xl:-top-28 xl:w-2/3 xl:left-1/4 w-full mb-6 md:mb-12 xl:mb-24'
							/>
							<ProjectImagesContainer
								project={project}
								className='col-span-full w-2/3 h-2/3 xl:w-full xl:h-full m-auto'
							/>
						</div>
						<div className='hidden sm:block sm:col-span-4 xl:col-span-6'>
							<ProjectStack project={project} />
						</div>
					</ProjectContent>

					<ProjectFooter className='flex-col md:flex-row flex-1 items-center justify-center gap-6 w-1/2 md:absolute md:bottom-0 xl:left-1/3'>
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
				</ProjectContainer>
			) : (
				<ProjectContainer className='w-full h-full'>
					<ProjectHeader
						project={project}
						className='w-full max-h-32 mb-12 md:mb-24 xl:mb-48'
					/>

					<ProjectContent className='grid grid-cols-1'>
						<div className='col-span-full'>
							<ProjectDescription
								project={project}
								className='mb-3 md:mb-6 xl:mb-12 line-clamp-8'
							/>
							<ProjectImagesContainer project={project} />
						</div>
					</ProjectContent>
				</ProjectContainer>
			)}
		</>
	);
}
