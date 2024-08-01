'use client';

import ContainerStruct from '@/components/ui/custom-container-layout';
import { cn } from '@/lib/utils';

type ProjectContainerPropsType = {
	children: React.ReactNode;
	className?: string;
};

export default function ProjectDataContainer({
	children,
	className,
}: ProjectContainerPropsType) {
	return (
		<ContainerStruct.Layout className={cn('gap-y-12 md:gap-x-12', className)}>
			{children}
		</ContainerStruct.Layout>
	);
}
