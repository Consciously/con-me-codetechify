import { formatDate, separateWords } from '@/lib/utils';
import ProjectStruct from './custom-project-layout';
import { SelectProject } from '@/db/schema';

export default function ProjectHeader({ project }: { project: SelectProject }) {
	return (
		<ProjectStruct.Header className='w-full'>
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
