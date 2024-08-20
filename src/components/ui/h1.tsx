import { cn } from '@/lib/utils';

type H1PropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function H1({ children, className }: H1PropsType) {
	return (
		<h1
			className={cn(
				'text-clamp-xl leading-relaxed font-semibold tracking-tight text-center',
				className,
			)}
		>
			{children}
		</h1>
	);
}
