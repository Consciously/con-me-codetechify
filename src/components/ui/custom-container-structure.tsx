import React from 'react';
import { cn } from '@/lib/utils';

type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T; xl?: T; '2xl'?: T };

type BaseProps = React.HTMLAttributes<HTMLElement> & {
	as?: React.ElementType;
};

type SectionProps = BaseProps;

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
	fullSpan?: boolean;
};

type FlexItemProps = BaseProps & {
	grow?: boolean;
	shrink?: boolean;
	basis?: string;
};

const cache = new Map<string, string>();

const getResponsiveClasses = (
	prefix: string,
	value: ResponsiveValue<number | string>,
) => {
	const cacheKey = `${prefix}-${JSON.stringify(value)}`;
	if (cache.has(cacheKey)) {
		return cache.get(cacheKey)!;
	}

	let result = '';
	if (typeof value === 'number' || typeof value === 'string') {
		result = `${prefix}-${value}`;
	} else if (typeof value === 'object') {
		result = Object.entries(value)
			.map(([breakpoint, val]) => {
				if (val === undefined) return ''; // Ignore undefined values
				return breakpoint === 'sm'
					? `${prefix}-${val}`
					: `${breakpoint}:${prefix}-${val}`;
			})
			.join(' ');
	}

	cache.set(cacheKey, result);
	return result;
};

const sectionSpacingClasses = 'py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20';
const containerSpacingClasses = 'py-6 sm:py-8 md:py-10 lg:py-14 xl:py-18';
const gridSpacingClasses = 'py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12';
const flexSpacingClasses = 'py-5 sm:py-7 md:py-9 lg:py-11 xl:py-13';
const gridItemSpacingClasses = 'py-3 sm:py-5 md:py-7 lg:py-9 xl:py-11';
const flexItemSpacingClasses = 'py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10';
const centeredPaddingClasses = 'mx-auto px-4 sm:px-6 lg:px-8';

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
	({ as: Component = 'section', className, ...props }, ref) => {
		return (
			<Component
				ref={ref}
				className={cn('w-full', sectionSpacingClasses, className)}
				{...props}
			/>
		);
	},
);
Section.displayName = 'Layout.Section';

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
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
					containerSpacingClasses,
					sizeClasses[size],
					isCentered && centeredPaddingClasses,
					className,
				)}
				{...props}
			/>
		);
	},
);
Container.displayName = 'Layout.Container';

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
	(
		{ as: Component = 'div', className, columns = 12, gap = 4, ...props },
		ref,
	) => {
		const gridColumns = getResponsiveClasses('grid-cols', columns);
		const gridGap = getResponsiveClasses('gap', gap);

		return (
			<Component
				ref={ref}
				className={cn(
					'grid',
					gridSpacingClasses,
					gridColumns,
					gridGap,
					className,
				)}
				{...props}
			/>
		);
	},
);
Grid.displayName = 'Layout.Grid';

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
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
					flexSpacingClasses,
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

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
	(
		{
			as: Component = 'div',
			className,
			colSpan,
			rowSpan,
			fullSpan = true,
			...props
		},
		ref,
	) => {
		const colSpanClasses = colSpan
			? getResponsiveClasses('col-span', colSpan)
			: fullSpan
			? 'col-span-full'
			: '';
		const rowSpanClasses = rowSpan
			? getResponsiveClasses('row-span', rowSpan)
			: '';

		return (
			<Component
				ref={ref}
				className={cn(
					gridItemSpacingClasses,
					colSpanClasses,
					rowSpanClasses,
					className,
				)}
				{...props}
			/>
		);
	},
);
GridItem.displayName = 'Layout.GridItem';

const FlexItem = React.forwardRef<HTMLDivElement, FlexItemProps>(
	(
		{ as: Component = 'div', className, grow, shrink, basis, ...props },
		ref,
	) => {
		return (
			<Component
				ref={ref}
				className={cn(
					flexItemSpacingClasses,
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
