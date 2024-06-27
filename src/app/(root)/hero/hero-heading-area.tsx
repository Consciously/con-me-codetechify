import Section from '@/components/ui/custom-section';
import H1 from '@/components/ui/h1';
import HeroHeadingFlip from './hero-heading-flip';

export default function HeroHeadingArea() {
	return (
		<Section.ContentContainer>
			<HeroHeadingFlip />
			<h3 className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
				Turning Challenges into Opportunities with Clean, Structured Code
			</h3>
		</Section.ContentContainer>
	);
}
