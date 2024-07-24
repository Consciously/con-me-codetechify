'use client';

import ProjectStruct from '@/components/ui/project/custom-project-layout';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { SelectProject } from '@/db/schema';
import Spacer from '../spacer';
import ProjectHeader from './project-header';
import ProjectDescription from './project-description';
import ProjectImagesContainer from './project-images-container';
import ProjectStack from './project-stack';

type ProjectItemPropsType = {
	project: SelectProject;
};

export default function ProjectItem({ project }: ProjectItemPropsType) {
	return (
		<ProjectStruct.Container className='w-full h-full'>
			<ProjectHeader project={project} />
			<ProjectStruct.Content className='grid grid-cols-8 gap-12 mb-6 md:mb-12 xl:mb-24'>
				<div className='col-span-full sm:col-span-4 xl:col-span-2 grid grid-cols-2'>
					<ProjectDescription
						project={project}
						className='col-span-full xl:absolute xl:-top-28 xl:w-2/3 xl:left-1/4'
					/>
					<ProjectImagesContainer project={project} className='col-span-full' />
				</div>
				<div className='hidden sm:block sm:col-span-4 xl:col-span-6'>
					<ProjectStack project={project} />
				</div>
			</ProjectStruct.Content>

			{/* project footer */}
			<ProjectStruct.Footer className='w-1/2 md:absolute md:bottom-0 xl:left-1/3'>
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
			</ProjectStruct.Footer>
		</ProjectStruct.Container>
	);
}
