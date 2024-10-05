import { Layout } from '@/components/ui/custom-container-structure';
import H1 from '@/components/ui/h1';

export default function PageHeader({ title }: { title: string }) {
	return (
		<Layout.Flex direction='column' justify='center' items='center'>
			<Layout.FlexItem>
				<H1>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						{title}
					</span>
				</H1>
			</Layout.FlexItem>
		</Layout.Flex>
	);
}
