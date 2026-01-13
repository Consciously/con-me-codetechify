import { cn } from '@/lib/utils';

export default function Spacer({
	children,
	className,
	variant = 'x-large',
}: {
	children: React.ReactNode;
	className?: string;
	variant?: 'small' | 'large' | 'x-large';
}) {
	let classValues = '';

	switch (variant) {
		case 'small':
			classValues = 'my-3 md:my-6 xl:my-12';
			break;
		case 'large':
			classValues = 'my-6 md:my-12 xl:my-24';
			break;
		case 'x-large':
			classValues = 'my-12 md:my-24 xl:my-48';
			break;
		default:
			break;
	}

	return <div className={cn(classValues, className)}>{children}</div>;
}
