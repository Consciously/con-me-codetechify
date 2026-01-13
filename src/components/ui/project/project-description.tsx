import ProjectStruct from '../custom-project-structure';
import { cn } from '@/lib/utils';
import type { ProjectDoc } from '@/types/project';

type ProjectDescriptionPropsType = {
	project: ProjectDoc;
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
