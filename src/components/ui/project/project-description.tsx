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
		<ProjectStruct.Description
			className={cn('w-full mb-6 md:mb-12 xl:mb-24', className)}
		>
			{project.description}
		</ProjectStruct.Description>
	);
}
