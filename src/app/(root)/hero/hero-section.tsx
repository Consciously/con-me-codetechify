import Section from '@/components/ui/custom-section';
import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
import Spacer from '@/components/ui/spacer';

export default function HeroSection() {
	return (
		<Section>
			<Spacer>
				<Section.GridContainer className='gap-y-6'>
					<HeroHeadingArea />
					<HeroCtaArea />
					<HeroIntroArea />
				</Section.GridContainer>
			</Spacer>
		</Section>
	);
}
