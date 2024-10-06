'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/page-header';
import { Layout } from '@/components/ui/custom-container-structure';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getProjectHandler } from '@/app/projects/actions/actions';
import { Project } from '@prisma/client';

type SummaryUploadDataProps = {
	projectId: string;
};

export default function SummaryUploadData({
	projectId,
}: SummaryUploadDataProps) {
	const router = useRouter();

	const {
		data: projectSummary,
		isLoading,
		error,
	} = useQuery<Project, Error>({
		queryKey: ['projectSummary', projectId],
		queryFn: async () => {
			try {
				const projectSummary = await getProjectHandler(projectId);
				return projectSummary;
			} catch (error) {
				throw new Error('Failed to fetch project summary');
			}
		},
	});

	const handleConfirm = () => {
		router.push('/projects');
	};

	if (isLoading) {
		return <div>Loading project summary...</div>;
	}

	if (error) {
		return <div>Error loading project summary: {error.message}</div>;
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
