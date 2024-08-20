import { cn } from '@/lib/utils';

type H3PropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function H3({ children, className }: H3PropsType) {
	return (
		<h3
			className={cn(
				'text-clamp-md leading-relaxed font-semibold tracking-tight text-center',
				className,
			)}
		>
			{children}
		</h3>
	);
}
