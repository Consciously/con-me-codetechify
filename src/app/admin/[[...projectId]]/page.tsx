import H1 from '@/components/ui/h1';
import DropzoneContainer from '../dropzone-container';
import Section from '@/components/ui/custom-section-structure';
import { Protect } from '@clerk/nextjs';
import DropzoneNoAccess from '../dropzone-noaccess';

export default async function AdminPage() {
	return (
		<Section isCentered>
			<Section.Item>
				<H1>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Admin Dashboard
					</span>
				</H1>
			</Section.Item>
			<Section.Item>
				<Protect
					permission='org:admin_dashboard:access'
					fallback={<DropzoneNoAccess />}
				>
					<DropzoneContainer />
				</Protect>
			</Section.Item>
		</Section>
	);
}
