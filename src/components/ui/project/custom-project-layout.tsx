import { cn } from '@/lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type CustomProjectLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectStruct({ children }: CustomProjectLayoutProps) {
	<>{children}</>;
}

ProjectStruct.Container = function ProjectStructContainer({
	children,
	className,
}: CustomProjectLayoutProps) {
	return <Card className={cn('', className)}>{children}</Card>;
};

ProjectStruct.Header = function ProjectStructHeader({
	children,
	className,
}: CustomProjectLayoutProps) {
	return <CardHeader className={cn('', className)}>{children}</CardHeader>;
};

ProjectStruct.Title = function ProjectStructTitle({
	children,
	className,
}: CustomProjectLayoutProps) {
	return <CardTitle className={cn('', className)}>{children}</CardTitle>;
};

ProjectStruct.Description = function ProjectStructDescription({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<CardDescription className={cn('', className)}>{children}</CardDescription>
	);
};

ProjectStruct.Content = function ProjectStructContent({
	children,
	className,
}: CustomProjectLayoutProps) {
	return <CardContent className={cn('', className)}>{children}</CardContent>;
};
