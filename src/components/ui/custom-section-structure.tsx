import { cn } from '@/lib/utils';
import MaxWidthWrapper from '@/components/max-width-wrapper';

type SectionPropsType = {
	children: React.ReactNode;
	className?: string;
	isCentered?: boolean;
};

export default function Section({
	children,
	className,
	isCentered = false,
}: SectionPropsType) {
	return (
		<section
			className={cn(
				'min-h-64 py-2 sm:py-4 md:py-8 lg:py-16 px-2 sm:px-4 md:px-8 lg:px-16',
				className,
			)}
		>
			<MaxWidthWrapper
				className={cn({
					'md:max-w-screen-2xl': isCentered,
				})}
			>
				<div className='grid grid-cols-12 gap-2 sm:gap-x-4 sm:gap-y-2 md:gap-x-8 md:gap-y-4 xl:gap-x-16 xl:gap-y-8'>
					{children}
				</div>
			</MaxWidthWrapper>
		</section>
	);
}

Section.Item = function SectionItem({ children, className }: SectionPropsType) {
	return <div className={cn('col-span-full', className)}>{children}</div>;
};
