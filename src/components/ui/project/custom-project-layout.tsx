import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type CustomProjectLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectStruct({ children }: CustomProjectLayoutProps) {
	<>{children}</>;
}

ProjectStruct.Container = function CustomProjectLayout({
	children,
	className,
}: CustomProjectLayoutProps) {
	return <Card className={cn('', className)}>{children}</Card>;
};
