// import Spacer from '@/components/ui/spacer';

import ServicesHeadingArea from './services-heading-area';
import ServiceOfferArea from './service-offer-area';
import ContainerStruct from '@/components/ui/custom-container-layout';
import Section from '@/components/ui/custom-section-structure';

export default function ServicesSection() {
	return (
		<>
			<Section.Item>
				<ServicesHeadingArea />
			</Section.Item>
			<Section.Item>
				<ServiceOfferArea />
			</Section.Item>
		</>
	);
}
