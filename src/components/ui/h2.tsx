import { cn } from '@/lib/utils';

type H2PropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function H2({ children, className }: H2PropsType) {
	return (
		<h2
			className={cn(
				'text-clamp-lg leading-relaxed font-semibold tracking-tight text-center',
				className,
			)}
		>
			{children}
		</h2>
	);
}
