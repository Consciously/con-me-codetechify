import H1 from '@/components/ui/h1';
import DropzoneContainer from '../dropzone-container';
import Section from '@/components/ui/custom-section-structure';

export default async function AdminPage() {
	return (
		<Section isCentered>
			<Section.Item>
				<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
					Admin Dashboard
				</H1>
			</Section.Item>
			<Section.Item>
				<DropzoneContainer />
			</Section.Item>
		</Section>
	);
}
