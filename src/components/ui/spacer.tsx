import { cn } from '@/lib/utils';

const defaultMarginValues = {
	default: { top: 12, bottom: 12 },
	md: { top: 24, bottom: 24 },
	xl: { top: 48, bottom: 48 },
};

const marginClass = (margin: { top: number; bottom: number }) => {
	return `mt-${margin.top} mb-${margin.bottom}`;
};

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
