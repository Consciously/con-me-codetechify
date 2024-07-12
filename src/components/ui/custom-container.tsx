import { cn } from '@/lib/utils';
import MaxWidthWrapper from '../max-width-wrapper';

type ContainerPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function Container({ children, className }: ContainerPropsType) {
	return (
		<MaxWidthWrapper className={cn('', className)}>{children}</MaxWidthWrapper>
	);
}

Container.Layout = function ContainerLayout({
	children,
	className,
}: ContainerPropsType) {
	return (
		<div className={cn('grid grid-cols-12 w-full', className)}>{children}</div>
	);
};

Container.Content = function ContainerContent({
	children,
	className,
}: ContainerPropsType) {
	return <div className={cn('col-span-full', className)}>{children}</div>;
};
