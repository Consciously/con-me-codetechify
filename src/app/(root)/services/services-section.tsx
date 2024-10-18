// import Spacer from '@/components/ui/spacer';

import ServicesHeadingArea from './services-heading-area';
import ServiceOfferArea from './service-offer-area';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ServicesSection() {
	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<ServicesHeadingArea />
			</Layout.Flex>
			<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }}>
				<ServiceOfferArea />
			</Layout.Grid>
		</>
	);
}
