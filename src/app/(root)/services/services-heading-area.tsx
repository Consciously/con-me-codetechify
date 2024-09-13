import { Layout } from '@/components/ui/custom-container-structure';
import H2 from '@/components/ui/h2';

export default function ServicesHeadingArea() {
	return (
		<Layout.FlexItem>
			<H2>
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
					What I Offer
				</span>
			</H2>
		</Layout.FlexItem>
	);
}
