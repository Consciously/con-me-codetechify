'use client';

import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/ui/custom-container-structure';
import { useRouter } from 'next/navigation';
import H1 from '@/components/ui/h1';

export default function ImagesUploadData() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleNextStep = () => {
		const randomId = Math.random().toString(36).substring(7);
		startTransition(() => {
			router.push(`/admin/uploads/summary?id=${randomId}`);
		});
	};

	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<Layout.FlexItem>
					<H1>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
							Images Upload
						</span>
					</H1>
				</Layout.FlexItem>
			</Layout.Flex>
			<Layout.Flex justify='center' items='center'>
				<Layout.FlexItem>
					<Button onClick={handleNextStep}>Proceed to the summary</Button>
				</Layout.FlexItem>
			</Layout.Flex>
		</>
	);
}
