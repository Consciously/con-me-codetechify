// import Spacer from '@/components/ui/spacer';

import ServicesHeadingArea from './services-heading-area';
import ServiceOfferArea from './service-offer-area';
import ContainerStruct from '@/components/ui/custom-container-layout';

export default function ServicesSection() {
	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			{/* <Spacer> */}
			<ContainerStruct.Layout className='gap-6'>
				<ServicesHeadingArea />
				<ServiceOfferArea />
			</ContainerStruct.Layout>
			{/* </Spacer> */}
		</ContainerStruct>
	);
}
