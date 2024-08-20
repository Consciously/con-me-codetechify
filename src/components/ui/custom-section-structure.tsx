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
				'min-h-64 my-2 sm:my-4 md:my-8 lg:my-16 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-0',
				className,
			)}
		>
			<MaxWidthWrapper
				className={cn({
					'md:max-w-screen-2xl': isCentered,
				})}
			>
				<div className='grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 xl:gap-16'>
					{children}
				</div>
			</MaxWidthWrapper>
		</section>
	);
}

Section.Item = function SectionItem({ children, className }: SectionPropsType) {
	return <div className={cn('col-span-full', className)}>{children}</div>;
};
