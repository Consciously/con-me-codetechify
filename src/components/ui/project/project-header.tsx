'use client';

import { Project } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { cn, formatDate, separateWords } from '@/lib/utils';
import ProjectStruct from './custom-project-layout';
import { Button } from '../button';

type ProjectHeaderPropsType = {
	className?: string;
	projectId?: string;
	children?: React.ReactNode;
	projectSize?: (project: Project) => 'large' | 'small';
};

export default function ProjectHeader({
	project,
	className,
	projectSize,
}: ProjectHeaderPropsType & { project: Project }) {
	const router = useRouter();

	return (
		<ProjectStruct.Header className={cn(className)}>
			<ProjectStruct.Title>{project.title}</ProjectStruct.Title>
			<ProjectStruct.Meta>
				<p className='flex gap-3 justify-center items-center'>
					<span className='text-primary'>
						{separateWords(project.clientName)}
					</span>
					<span className='text-secondary'>
						{formatDate(project.createdAt)}
					</span>
				</p>
				<Button
					className={cn(
						'w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
						{
							'md:w-1/2': projectSize && projectSize(project) === 'large',
						},
					)}
					onClick={() => router.push(`/projects/${project.id}`)}
				>
					More...
				</Button>
			</ProjectStruct.Meta>
		</ProjectStruct.Header>
	);
}
