import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
import Spacer from '@/components/ui/spacer';
import Container from '@/components/ui/custom-container';

export default function HeroSection() {
	return (
		<Container>
			<Spacer>
				<Container.Layout className='gap-y-6'>
					<HeroHeadingArea />
					<HeroCtaArea />
					<HeroIntroArea />
				</Container.Layout>
			</Spacer>
		</Container>
	);
}
