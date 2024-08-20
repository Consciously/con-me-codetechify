import { cn } from '@/lib/utils';

type BlockPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function Block({ children, className }: BlockPropsType) {
	return (
		<div className={cn('mb-4 md:mb-8 lg:mb-16', className)}>
			<div className='grid grid-cols-12 gap-2 sm:gap-4 md:gap-8 xl:gap-16'>
				{children}
			</div>
		</div>
	);
}

Block.Item = function BlockItem({ children, className }: BlockPropsType) {
	return (
		<div className={cn('col-span-full p-2 md:p-4 lg:p-8', className)}>
			{children}
		</div>
	);
};

Block.ContentGroup = function BlockContentGroup({
	children,
	className,
}: BlockPropsType) {
	return (
		<div
			className={cn(
				'grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 md:gap-4',
				className,
			)}
		>
			{children}
		</div>
	);
};

Block.Content = function BlockContent({ children, className }: BlockPropsType) {
	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center p-1 md:p-2 lg:p-4',
				className,
			)}
		>
			{children}
		</div>
	);
};
