'use client';

import { cn } from '@/lib/utils';
import Block from '../custom-block-structure';

type ProjectContainerPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectDataContainer({
	children,
	className,
}: ProjectContainerPropsType) {
	return (
		<Block className={cn(className)}>
			<Block.Item>{children}</Block.Item>
		</Block>
	);
}
