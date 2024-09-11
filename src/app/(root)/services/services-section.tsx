// import Spacer from '@/components/ui/spacer';

import ServicesHeadingArea from './services-heading-area';
import ServiceOfferArea from './service-offer-area';
import Section from '@/components/ui/custom-section-structure';
import { Container, Content } from '@/components/ui/custom-container-structure';

export default function ServicesSection() {
	return (
		<>
			<Container className='py-12 md:py-24'>
				<ServicesHeadingArea />
			</Container>
			<Container>
				<Content>
					<ServiceOfferArea />
				</Content>
			</Container>
		</>
	);
}
