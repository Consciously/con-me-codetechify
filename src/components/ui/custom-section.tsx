import { cn } from '@/lib/utils';
import MaxWidthWrapper from '../max-width-wrapper';

type SectionPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function Section({ children, className }: SectionPropsType) {
	return (
		<MaxWidthWrapper className={cn('', className)}>{children}</MaxWidthWrapper>
	);
}

Section.GridContainer = function SectionGridContainer({
	children,
	className,
}: SectionPropsType) {
	return <div className={cn('grid grid-cols-12', className)}>{children}</div>;
};

Section.ContentContainer = function SectionContentContainer({
	children,
	className,
}: SectionPropsType) {
	return <div className={cn('col-span-full', className)}>{children}</div>;
};
