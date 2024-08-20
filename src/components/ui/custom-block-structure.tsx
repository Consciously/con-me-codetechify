import { cn } from '@/lib/utils';

type BlockPropsType = {
	children: React.ReactNode;
	className?: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

export default function Block({
	children,
	className,
	...props
}: BlockPropsType) {
	return (
		<div className={cn('mb-4', className)} {...props}>
			<div
				className='grid grid-cols-12 gap-2 sm:gap-x-4 sm:gap-y-2 md:gap-x-8 md:gap-y-4 xl:gap-x-16 xl:gap-y-8'
				{...props}
			>
				{children}
			</div>
		</div>
	);
}

Block.Item = function BlockItem({
	children,
	className,
	...props
}: BlockPropsType) {
	return (
		<div className={cn('col-span-full px-2 py-1', className)} {...props}>
			{children}
		</div>
	);
};

Block.ContentGroup = function BlockContentGroup({
	children,
	className,
	...props
}: BlockPropsType) {
	return (
		<div
			className={cn(
				'grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2 md:gap-x-4 md:gap-y-2',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

Block.Content = function BlockContent({
	children,
	className,
	...props
}: BlockPropsType) {
	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center p-1 md:p-2 lg:p-4',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};
