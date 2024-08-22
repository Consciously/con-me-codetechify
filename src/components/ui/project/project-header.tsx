'use client';

import { Project } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { cn, formatDate, separateWords } from '@/lib/utils';
import ProjectStruct from '../custom-project-structure';
import { Button } from '../button';
import Link from 'next/link';

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
			<Link
				href={`/projects/${project.id}`}
				className='border border-transparent hover:border-dotted hover:border-primary hover:rounded-md transition m-2 md:m-4'
			>
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
				</ProjectStruct.Meta>
			</Link>
		</ProjectStruct.Header>
	);
}
