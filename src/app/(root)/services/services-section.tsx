import Section from '@/components/ui/custom-section';
import Spacer from '@/components/ui/spacer';

import ServicesHeadingArea from './services-heading-area';
import ServiceOfferArea from './service-offer-area';

export default function ServicesSection() {
	return (
		<Section>
			<Spacer>
				<Section.GridContainer className='gap-6'>
					<ServicesHeadingArea />
					<ServiceOfferArea />
				</Section.GridContainer>
			</Spacer>
		</Section>
	);
}
