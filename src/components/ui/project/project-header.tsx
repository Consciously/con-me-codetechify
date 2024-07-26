import { cn, formatDate, separateWords } from '@/lib/utils';
import ProjectStruct from './custom-project-layout';
import { SelectProject } from '@/db/schema';

type ProjectHeaderPropsType = {
	className?: string;
};

export default function ProjectHeader({
	project,
	className,
}: ProjectHeaderPropsType & { project: SelectProject }) {
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
			</ProjectStruct.Meta>
		</ProjectStruct.Header>
	);
}
