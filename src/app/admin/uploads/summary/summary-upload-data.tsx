'use client';

import { useRouter } from 'next/navigation';
import PageHeader from '@/components/page-header';
import { Layout } from '@/components/ui/custom-container-structure';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useQuery } from 'convex/react';
import { anyApi, type FunctionReference } from 'convex/server';
import type { ProjectDoc } from '@/types/project';

type SummaryUploadDataProps = {
	projectId: string;
};

export default function SummaryUploadData({
	projectId,
}: SummaryUploadDataProps) {
	const router = useRouter();

	const projectSummary = useQuery(
		anyApi.projects.getById as FunctionReference<'query'>,
		{ id: projectId as unknown as string },
	) as ProjectDoc | null | undefined;
	const isLoading = projectSummary === undefined;

	const handleConfirm = () => {
		router.push('/projects');
	};

	if (isLoading) {
		return <div>Loading project summary...</div>;
	}

	if (!projectSummary) {
		return <div>No project summary available.</div>;
	}

	return (
		<>
			<PageHeader title='Project Summary' />
			<Layout.Grid>
				<Layout.GridItem fullSpan>
					<Card>
						<CardHeader>
							<CardTitle>{projectSummary.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='mb-4'>{projectSummary.description}</p>
							<div className='grid grid-cols-2 gap-4 mb-4'>
								{projectSummary.images.map((url, index) => (
									<Image
										key={index}
										src={url}
										alt={`Project image ${index + 1}`}
										width={300}
										height={300}
										unoptimized={url.startsWith('http')}
										className='rounded-lg object-cover'
									/>
								))}
							</div>
							<Button onClick={handleConfirm}>Confirm Project</Button>
						</CardContent>
					</Card>
				</Layout.GridItem>
			</Layout.Grid>
		</>
	);
}
