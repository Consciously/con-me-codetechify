import H1 from '@/components/ui/h1';
import Block from '@/components/ui/custom-block-structure';
import H4 from '@/components/ui/h4';
import { Content } from '@/components/ui/custom-container-structure';

export default function HeroHeadingArea() {
	return (
		<Content className='md:mb-8 lg:mb-16'>
			<H1>
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
					Crafting Innovating Web Solutions with Heart and Skill
				</span>
			</H1>
			<H4 className='hidden md:block'>
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary'>
					Turning Challenges into Opportunities with Clean, Structured Code
				</span>
			</H4>
		</Content>
	);
}
