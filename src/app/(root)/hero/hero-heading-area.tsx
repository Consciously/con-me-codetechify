import Section from '@/components/ui/custom-section';
import H1 from '@/components/ui/h1';

export default function HeroHeadingArea() {
	return (
		<Section.ContentContainer>
			<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
				Driven by Passion, Committed to Excellence
			</H1>
			<p className='text-lg/relaxed text-balance text-center'>
				Building Deep Expertise and Creative Solutions in Web Development
			</p>
		</Section.ContentContainer>
	);
}
