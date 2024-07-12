import Spacer from '@/components/ui/spacer';

import ServicesHeadingArea from './services-heading-area';
import ServiceOfferArea from './service-offer-area';
import Container from '@/components/ui/custom-container';

export default function ServicesSection() {
	return (
		<Container>
			<Spacer>
				<Container.Layout className='gap-6'>
					<ServicesHeadingArea />
					<ServiceOfferArea />
				</Container.Layout>
			</Spacer>
		</Container>
	);
}
