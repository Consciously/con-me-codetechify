import H2 from '@/components/ui/h2';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ProjectHeaderArea({ title }: { title: string }) {
	return (
		<Layout.FlexItem>
			<H2>
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
					{title}
				</span>
			</H2>
		</Layout.FlexItem>
	);
}
