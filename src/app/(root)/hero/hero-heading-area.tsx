import ContainerStruct from '@/components/ui/custom-container-layout';
import H1 from '@/components/ui/h1';
import HeroHeadingFlip from './hero-heading-flip';

export default function HeroHeadingArea() {
	return (
		<ContainerStruct.Content>
			<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
				Crafting Innovating Web Solutions with Heart and Skill
			</H1>
			<h3 className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
				Turning Challenges into Opportunities with Clean, Structured Code
			</h3>
		</ContainerStruct.Content>
	);
}
