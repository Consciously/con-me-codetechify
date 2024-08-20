import { cn } from '@/lib/utils';

type H4PropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function H4({ children, className }: H4PropsType) {
	return (
		<h4
			className={cn(
				'text-clamp-sm leading-relaxed font-semibold tracking-tight text-center',
				className,
			)}
		>
			{children}
		</h4>
	);
}
