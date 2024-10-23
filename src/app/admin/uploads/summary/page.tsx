import { Layout } from '@/components/ui/custom-container-structure';
import SummaryUploadData from './summary-upload-data';
import { notFound } from 'next/navigation';

type SummaryUploadPageProps = {
	searchParams: Promise<{
		[key: string]: string | string[] | undefined;
	}>;
};

export default async function SummaryUploadPage(props: SummaryUploadPageProps) {
    const searchParams = await props.searchParams;
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
