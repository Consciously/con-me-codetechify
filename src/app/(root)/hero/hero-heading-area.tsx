import H1 from '@/components/ui/h1';
import H4 from '@/components/ui/h4';
import { Layout } from '@/components/ui/custom-container-structure';

export default function HeroHeadingArea() {
	return (
		<Layout.FlexItem>
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
		</Layout.FlexItem>
	);
}
