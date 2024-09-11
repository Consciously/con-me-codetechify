import Block from '@/components/ui/custom-block-structure';
import { Content } from '@/components/ui/custom-container-structure';
import H2 from '@/components/ui/h2';

export default function ServicesHeadingArea() {
	return (
		<Content className='md:mb-8 lg:mb-16'>
			<H2>
				<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
					What I Offer
				</span>
			</H2>
		</Content>
	);
}
