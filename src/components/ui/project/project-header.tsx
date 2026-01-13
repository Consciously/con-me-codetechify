'use client';

import { cn, formatDate, separateWords } from '@/lib/utils';
import ProjectStruct from '../custom-project-structure';
import Link from 'next/link';
import type { ProjectDoc } from '@/types/project';

type ProjectHeaderPropsType = {
	className?: string;
	projectId?: string;
	children?: React.ReactNode;
};

export default function ProjectHeader({
	project,
	className,
}: ProjectHeaderPropsType & { project: ProjectDoc }) {
	return (
		<ProjectStruct.Header className={cn(className)}>
			<Link
				href={`/projects/${project._id}`}
				className={cn(
					'group rounded-lg border border-transparent p-2 md:p-3',
					'hover:border-dotted hover:border-primary/70',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
				)}
			>
				<ProjectStruct.Title className='group-hover:from-primary group-hover:to-secondary'>
					{project.title}
				</ProjectStruct.Title>
				<ProjectStruct.Meta className='mt-1'>
					<p className='flex flex-wrap gap-x-3 gap-y-1 justify-center items-center text-sm/relaxed'>
						<span className='text-primary'>{separateWords(project.clientName)}</span>
						<span className='text-secondary'>
							{formatDate(project._creationTime)}
						</span>
					</p>
				</ProjectStruct.Meta>
			</Link>
		</ProjectStruct.Header>
	);
}
