import Block from '@/components/ui/custom-block-structure';
import ContainerStruct from '@/components/ui/custom-container-layout';
import H2 from '@/components/ui/h2';

export default function ProjectHeaderArea({ title }: { title: string }) {
	return (
		<Block>
			<Block.Item>
				<H2>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						{title}
					</span>
				</H2>
			</Block.Item>
		</Block>
	);
}
