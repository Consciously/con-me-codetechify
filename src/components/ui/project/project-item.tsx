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
		<ProjectStruct.Container className='h-full'>
			<ProjectHeader project={project} />
			<ProjectStruct.Content className='grid grid-cols-6 gap-12'>
				<div className='col-span-full sm:col-span-3 xl:col-span-2 grid grid-cols-2'>
					<ProjectDescription project={project} className='col-span-full' />
					<ProjectImagesContainer project={project} className='col-span-full' />
				</div>
				<div className='hidden sm:block sm:col-span-3 xl:col-span-4'>
					<ProjectStack project={project} />
				</div>
			</ProjectStruct.Content>

			{/* project footer */}
			<ProjectStruct.Footer className='w-full'>
				<a
					href={project.liveDemo}
					className={cn(
						buttonVariants(),
						'block w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
					)}
				>
					Live Demo
				</a>
				<a
					href={project.githubRepo}
					className={cn(
						buttonVariants(),
						'block w-full bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 text-center',
					)}
				>
					GitHub Repo
				</a>
			</ProjectStruct.Footer>
		</ProjectStruct.Container>
	);
}
