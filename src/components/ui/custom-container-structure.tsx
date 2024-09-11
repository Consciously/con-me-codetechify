import React from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
	as?: React.ElementType;
	variant?: 'default' | 'grid' | 'flex';
	fullWidth?: boolean;
};

const Container = React.forwardRef<HTMLElement, ContainerProps>(
	(
		{
			as: Component = 'div',
			className,
			variant = 'default',
			fullWidth,
			...props
		},
		ref,
	) => {
		const baseStyles = 'w-full';
		const widthStyles = !fullWidth
			? 'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'
			: '';
		const variantStyles = {
			default: '',
			grid: 'grid gap-4 sm:gap-6 lg:gap-8',
			flex: 'flex flex-col',
		};

		return (
			<Component
				ref={ref}
				className={cn(
					baseStyles,
					widthStyles,
					variantStyles[variant],
					className,
				)}
				{...props}
			/>
		);
	},
);
Container.displayName = 'Container';

const HeaderContainer = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
	<header
		ref={ref}
		className={cn(
			'w-full bg-background/90 backdrop-blur-sm z-50 border-b border-border/10 sticky top-0',
			className,
		)}
		{...props}
	>
		<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
			{props.children}
		</div>
	</header>
));
HeaderContainer.displayName = 'HeaderContainer';

const FooterContainer = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
	<footer
		ref={ref}
		className={cn(
			'w-full bg-background/90 backdrop-blur-sm border-t border-border/10',
			className,
		)}
		{...props}
	>
		<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			{props.children}
		</div>
	</footer>
));
FooterContainer.displayName = 'FooterContainer';

type ContentProps = React.HTMLAttributes<HTMLElement> & {
	as?: React.ElementType;
	variant?: 'default' | 'grid-item' | 'flex-item';
};

const Content = React.forwardRef<HTMLElement, ContentProps>(
	(
		{ as: Component = 'div', className, variant = 'default', ...props },
		ref,
	) => {
		const variantStyles = {
			default: '',
			'grid-item': 'col-span-full',
			'flex-item': 'flex-grow',
		};

		return (
			<Component
				ref={ref}
				className={cn(variantStyles[variant], className)}
				{...props}
			/>
		);
	},
);
Content.displayName = 'Content';

const Section = React.forwardRef<
	HTMLElement,
	React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
	<section
		ref={ref}
		className={cn('py-12 sm:py-16 md:py-24', className)}
		{...props}
	/>
));
Section.displayName = 'Section';

export { Container, HeaderContainer, FooterContainer, Content, Section };
