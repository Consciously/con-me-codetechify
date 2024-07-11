import { cn } from '@/lib/utils';

export default function Spacer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn('my-12 md:my-24 xl:my-48 w-full', className)}>
			{children}
		</div>
	);
}
