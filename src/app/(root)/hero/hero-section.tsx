import Section from '@/components/ui/custom-section';
import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';

export default function HeroSection() {
	return (
		<Section>
			<Section.GridContainer className='gap-y-6 my-12 md:my-24 xl:my-48'>
				<HeroHeadingArea />
				<HeroCtaArea />
				<HeroIntroArea />
			</Section.GridContainer>
		</Section>
	);
}
