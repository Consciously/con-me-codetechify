import { cn } from '@/lib/utils';
import MaxWidthWrapper from '../max-width-wrapper';

type ContainerPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ContainerStruct({
	children,
	className,
}: ContainerPropsType) {
	return (
		<MaxWidthWrapper className={cn('', className)}>{children}</MaxWidthWrapper>
	);
}

ContainerStruct.Layout = function ContainerStructLayout({
	children,
	className,
}: ContainerPropsType) {
	return (
		<div className={cn('grid grid-cols-12 w-full', className)}>{children}</div>
	);
};

ContainerStruct.Content = function ContainerStructContent({
	children,
	className,
}: ContainerPropsType) {
	return <div className={cn('col-span-full', className)}>{children}</div>;
};
