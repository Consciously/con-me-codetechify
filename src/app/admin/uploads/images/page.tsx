import { Layout } from '@/components/ui/custom-container-structure';
import { notFound } from 'next/navigation';
import ImagesUploadData from './image-upload-data';

type ImageUploadPageProps = {
	searchParams: Promise<{
		[key: string]: string | string[] | undefined;
	}>;
};

export default async function ImageUploadPage(props: ImageUploadPageProps) {
    const searchParams = await props.searchParams;
    const { id } = searchParams;

    if (!id || typeof id !== 'string') {
		return notFound();
	}

    return (
		<Layout.Section>
			<Layout.Container isCentered>
				<ImagesUploadData projectId={id} />
			</Layout.Container>
		</Layout.Section>
	);
}
