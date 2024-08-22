import { cn } from '@/lib/utils';
import ProjectStruct from '../custom-project-structure';

type ProjectFooterPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectFooter({
	children,
	className,
}: ProjectFooterPropsType) {
	return (
		<ProjectStruct.Footer className={cn(className)}>
			{children}
		</ProjectStruct.Footer>
	);
}
