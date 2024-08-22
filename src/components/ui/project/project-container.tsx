import { cn } from '@/lib/utils';
import ProjectStruct from '../custom-project-structure';

type ProjectContainerPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectContainer({
	children,
	className,
}: ProjectContainerPropsType) {
	return (
		<ProjectStruct.Container className={cn('p-0', className)}>
			{children}
		</ProjectStruct.Container>
	);
}
