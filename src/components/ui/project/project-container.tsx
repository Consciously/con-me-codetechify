import { cn } from '@/lib/utils';
import ProjectStruct from './custom-project-layout';

type ProjectContainerPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectContainer({
	children,
	className,
}: ProjectContainerPropsType) {
	return (
		<ProjectStruct.Container className={cn('', className)}>
			{children}
		</ProjectStruct.Container>
	);
}
