import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
import { Container, Content } from '@/components/ui/custom-container-structure';

export default function HeroSection() {
	return (
		<>
			<Container className='py-12 md:py-24'>
				<HeroHeadingArea />
			</Container>

			<Container
				variant='grid'
				className='grid-cols-1 md:grid-cols-12 gap-8 mt-8 md:mt-12'
			>
				<Content variant='grid-item' className='md:col-span-6 xl:col-span-4'>
					<HeroCtaArea />
				</Content>
				<Content variant='grid-item' className='md:col-span-6 xl:col-span-8'>
					<HeroIntroArea />
				</Content>
			</Container>
		</>
	);
}
