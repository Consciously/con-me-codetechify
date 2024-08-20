import H1 from '@/components/ui/h1';
import Block from '@/components/ui/custom-block-structure';
import H3 from '@/components/ui/h3';

export default function HeroHeadingArea() {
	return (
		<Block>
			<Block.Item>
				<Block.Content>
					<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Crafting Innovating Web Solutions with Heart and Skill
					</H1>
					<H3 className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary'>
						Turning Challenges into Opportunities with Clean, Structured Code
					</H3>
				</Block.Content>
			</Block.Item>
		</Block>
	);
}
