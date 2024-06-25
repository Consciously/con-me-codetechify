import { cn } from '@/lib/utils';

type MaxWidthWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function MaxWidthWrapper({
	children,
	className,
}: MaxWidthWrapperProps) {
	return (
		<div
			className={cn(
				'mx-auto w-full h-full md:max-w-screen-2xl px-4 md:px-8 xl:px-20',
				className,
			)}
		>
			{children}
		</div>
	);
}
