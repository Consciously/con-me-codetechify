import { cn } from '@/lib/utils';

type H1PropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function H1({ children, className }: H1PropsType) {
	return (
		<div
			className={cn(
				'text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold tracking-tight text-center',
				className,
			)}
		>
			{children}
		</div>
	);
}
