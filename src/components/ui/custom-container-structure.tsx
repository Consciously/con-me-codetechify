import React from 'react';
import { cn } from '@/lib/utils';

type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T; xl?: T; '2xl'?: T };

type BaseProps = React.HTMLAttributes<HTMLElement> & {
	as?: React.ElementType;
};

type SectionProps = BaseProps & {
	spacing?: 'none' | 'sm' | 'md' | 'lg';
};

type ContainerProps = BaseProps & {
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
	isCentered?: boolean;
};

type GridProps = BaseProps & {
	columns?: ResponsiveValue<number>;
	gap?: ResponsiveValue<number>;
};

type FlexProps = BaseProps & {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
	items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
};

type GridItemProps = BaseProps & {
	colSpan?: ResponsiveValue<number>;
	rowSpan?: ResponsiveValue<number>;
};

type FlexItemProps = BaseProps & {
	grow?: boolean;
	shrink?: boolean;
	basis?: string;
};

const getResponsiveClasses = (
	prefix: string,
	value: ResponsiveValue<number | string>,
) => {
	if (typeof value === 'number' || typeof value === 'string') {
		return `${prefix}-${value}`;
	}
	if (typeof value === 'object') {
		return Object.entries(value)
			.map(([breakpoint, val]) => {
				if (val === undefined) return ''; // Ignore undefined values
				return breakpoint === 'sm'
					? `${prefix}-${val}`
					: `${breakpoint}:${prefix}-${val}`;
			})
			.join(' ');
	}
	return ''; // Return empty string if value doesn't match expected types
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
	({ as: Component = 'section', className, spacing = 'md', ...props }, ref) => {
		const spacingClasses = {
			none: '',
			sm: 'py-4 sm:py-6',
			md: 'py-8 sm:py-12',
			lg: 'py-12 sm:py-16 md:py-20',
		};

		return (
			<Component
				ref={ref}
				className={cn('w-full', spacingClasses[spacing], className)}
				{...props}
			/>
		);
	},
);
Section.displayName = 'Layout.Section';

const Container = React.forwardRef<HTMLElement, ContainerProps>(
	(
		{
			as: Component = 'div',
			className,
			size = 'xl',
			isCentered = false,
			...props
		},
		ref,
	) => {
		const sizeClasses = {
			sm: 'max-w-screen-sm',
			md: 'max-w-screen-md',
			lg: 'max-w-screen-lg',
			xl: 'max-w-screen-xl',
			'2xl': 'max-w-screen-2xl',
			full: 'w-full',
		};

		return (
			<Component
				ref={ref}
				className={cn(
					'w-full',
					sizeClasses[size],
					isCentered && 'mx-auto px-4 sm:px-6 lg:px-8',
					className,
				)}
				{...props}
			/>
		);
	},
);
Container.displayName = 'Layout.Container';

const Grid = React.forwardRef<HTMLElement, GridProps>(
	(
		{ as: Component = 'div', className, columns = 12, gap = 4, ...props },
		ref,
	) => {
		const gridColumns = getResponsiveClasses('grid-cols', columns);
		const gridGap = getResponsiveClasses('gap', gap);

		return (
			<Component
				ref={ref}
				className={cn('grid', gridColumns, gridGap, className)}
				{...props}
			/>
		);
	},
);
Grid.displayName = 'Layout.Grid';

const Flex = React.forwardRef<HTMLElement, FlexProps>(
	(
		{
			as: Component = 'div',
			className,
			direction = 'row',
			wrap = 'nowrap',
			justify = 'start',
			items = 'stretch',
			...props
		},
		ref,
	) => {
		return (
			<Component
				ref={ref}
				className={cn(
					'flex',
					`flex-${direction}`,
					`flex-${wrap}`,
					`justify-${justify}`,
					`items-${items}`,
					className,
				)}
				{...props}
			/>
		);
	},
);
Flex.displayName = 'Layout.Flex';

const GridItem = React.forwardRef<HTMLElement, GridItemProps>(
	({ as: Component = 'div', className, colSpan, rowSpan, ...props }, ref) => {
		const colSpanClasses = colSpan
			? getResponsiveClasses('col-span', colSpan)
			: '';
		const rowSpanClasses = rowSpan
			? getResponsiveClasses('row-span', rowSpan)
			: '';

		return (
			<Component
				ref={ref}
				className={cn(colSpanClasses, rowSpanClasses, className)}
				{...props}
			/>
		);
	},
);
GridItem.displayName = 'Layout.GridItem';

const FlexItem = React.forwardRef<HTMLElement, FlexItemProps>(
	(
		{ as: Component = 'div', className, grow, shrink, basis, ...props },
		ref,
	) => {
		return (
			<Component
				ref={ref}
				className={cn(
					grow && 'flex-grow',
					shrink && 'flex-shrink',
					basis && `flex-basis-${basis}`,
					className,
				)}
				{...props}
			/>
		);
	},
);
FlexItem.displayName = 'Layout.FlexItem';

export const Layout = {
	Section,
	Container,
	Grid,
	Flex,
	GridItem,
	FlexItem,
};
