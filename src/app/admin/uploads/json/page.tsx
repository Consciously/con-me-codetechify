import { Layout } from '@/components/ui/custom-container-structure';
import JsonUploadData from './json-upload-data';

export default function JsonUploadPage() {
	return (
		<Layout.Section>
			<Layout.Container isCentered>
				<JsonUploadData />
			</Layout.Container>
		</Layout.Section>
	);
}
