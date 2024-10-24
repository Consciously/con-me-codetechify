'use client';

import { cn } from '@/lib/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type CustomProjectLayoutProps = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectStruct({ children }: CustomProjectLayoutProps) {
	<>{children}</>;
}

ProjectStruct.Container = function ProjectStructContainer({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<Card
			className={cn(
				'bg-[rgba(217,217,217,0.7)] backdrop-blur-lg border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 relative',
				className,
			)}
		>
			{children}
		</Card>
	);
};

ProjectStruct.Header = function ProjectStructHeader({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<CardHeader className={cn('flex-1', className)}>{children}</CardHeader>
	);
};

ProjectStruct.Content = function ProjectStructContent({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<CardContent className={cn('flex-1 relative', className)}>
			{children}
		</CardContent>
	);
};
ProjectStruct.Footer = function ProjectStructFooter({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<CardFooter className={cn('flex flex-col', className)}>
			{children}
		</CardFooter>
	);
};

ProjectStruct.Title = function ProjectStructTitle({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<CardTitle
			className={cn(
				'text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center',
				className,
			)}
		>
			{children}
		</CardTitle>
	);
};

ProjectStruct.Description = function ProjectStructDescription({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<CardDescription
			className={cn(
				'text-lg/relaxed text-primary-foreground text-center',
				className,
			)}
		>
			{children}
		</CardDescription>
	);
};

ProjectStruct.Meta = function ProjectStructMeta({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<div
			className={cn(
				'text-base/relaxed text-primary-foreground text-center',
				className,
			)}
		>
			{children}
		</div>
	);
};

ProjectStruct.Stack = function ProjectStructStack({
	children,
	className,
}: CustomProjectLayoutProps) {
	return <div className={cn('', className)}>{children}</div>;
};

ProjectStruct.ImagesContainer = function ProjectStructImagesContainer({
	children,
	className,
}: CustomProjectLayoutProps) {
	return (
		<div className={cn('flex justify-center items-center gap-6', className)}>
			{children}
		</div>
	);
};

ProjectStruct.Image = function ProjectStructImage({
	children,
	className,
	onClick,
}: CustomProjectLayoutProps & { onClick?: () => void }) {
	return (
		<div className={cn('flex-auto', className)} onClick={onClick}>
			{children}
		</div>
	);
};

// ProjectStruct.Redirect = function ProjectStructRedirect({
// 	children,
// 	className,
// 	onClick,
// }: CustomProjectLayoutProps & { onClick?: () => void }) {
// 	const router = useRouter();
// 	const pathname = usePathname();

// 	return (
// 		<Button
// 			className={cn(
// 				'w-full bg-transparent from-primary to-secondary bg-gradient-to-tr shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
// 				className,
// 			)}
// 			onClick={onClick}
// 		>
// 			{children}
// 		</Button>
// 	);
// };
