import { Project } from '@prisma/client';
import ProjectStruct from './custom-project-layout';
import { cn } from '@/lib/utils';

type ProjectDescriptionPropsType = {
	project: Project;
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
