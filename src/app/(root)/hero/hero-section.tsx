import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
import Spacer from '@/components/ui/spacer';
import ContainerStruct from '@/components/ui/custom-container-layout';

export default function HeroSection() {
	return (
		<ContainerStruct>
			<Spacer>
				<ContainerStruct.Layout className='gap-y-6'>
					<HeroHeadingArea />
					<HeroCtaArea />
					<HeroIntroArea />
				</ContainerStruct.Layout>
			</Spacer>
		</ContainerStruct>
	);
}
