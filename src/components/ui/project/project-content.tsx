import { cn } from '@/lib/utils';
import ProjectStruct from './custom-project-layout';

type ProjectContentPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectContent({
	children,
	className,
}: ProjectContentPropsType) {
	return (
		<ProjectStruct.Content className={cn(className)}>
			{children}
		</ProjectStruct.Content>
	);
}
