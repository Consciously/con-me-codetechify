import { SelectProject } from '@/db/schema';
import ProjectStruct from './custom-project-layout';

export default function ProjectDescription({
	project,
}: {
	project: SelectProject;
}) {
	return (
		<ProjectStruct.Description className='w-full md:w-[650px] mx-auto'>
			{project.description}
		</ProjectStruct.Description>
	);
}
