import { Layout } from '@/components/ui/custom-container-structure';
import SummaryUploadData from './summary-upload-data';
import { notFound } from 'next/navigation';

type SummaryUploadPageProps = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

export default function SummaryUploadPage({
	searchParams,
}: SummaryUploadPageProps) {
	const { id } = searchParams;

	if (!id || typeof id !== 'string') {
		return notFound();
	}

	return (
		<Layout.Section>
			<Layout.Container isCentered>
				<SummaryUploadData projectId={id} />
			</Layout.Container>
		</Layout.Section>
	);
}
