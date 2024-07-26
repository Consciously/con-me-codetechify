import { SelectProject } from '@/db/schema';
import ProjectStruct from './custom-project-layout';
import { cn } from '@/lib/utils';

type ProjectDescriptionPropsType = {
	project: SelectProject;
	className?: string;
};

export default function ProjectDescription({
	project,
	className,
}: ProjectDescriptionPropsType) {
	return (
		<ProjectStruct.Description className={cn(className)}>
			{project.description}
		</ProjectStruct.Description>
	);
}
