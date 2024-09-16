import React from 'react';
import { Layout } from '@/components/ui/custom-container-structure';
import Stepper from '@/app/admin/uploads/stepper';

const steps = [
	{ id: 1, label: 'Upload JSON file', path: '/admin/uploads/json' },
	{ id: 2, label: 'Upload Images', path: '/admin/uploads/images' },
	{ id: 3, label: 'Upload Summary', path: '/admin/uploads/summary' },
];

export default function CreateProjectLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Layout.Section>
			<Layout.Container isCentered>
				<Layout.Section>
					<Stepper steps={steps} />
				</Layout.Section>
				{children}
			</Layout.Container>
		</Layout.Section>
	);
}
