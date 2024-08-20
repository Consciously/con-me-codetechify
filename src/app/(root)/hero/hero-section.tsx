import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
// import Spacer from '@/components/ui/spacer';
import Section from '@/components/ui/custom-section-structure';

export default function HeroSection() {
	return (
		<>
			<Section.Item>
				<HeroHeadingArea />
			</Section.Item>
			<Section.Item className='md:col-span-6 xl:col-span-4'>
				<HeroCtaArea />
			</Section.Item>
			<Section.Item className='md:col-span-6 xl:col-span-8'>
				<HeroIntroArea />
			</Section.Item>
		</>
	);
}
