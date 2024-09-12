import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
import { Layout } from '@/components/ui/custom-container-structure';

export default function HeroSection() {
	return (
		<Layout.Container className='space-y-8 md:space-y-12'>
			<Layout.Flex direction='column' justify='center' items='center'>
				<HeroHeadingArea />
			</Layout.Flex>

			<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }} gap={8}>
				<Layout.GridItem colSpan={{ sm: 1, md: 3, xl: 4 }}>
					<HeroCtaArea />
				</Layout.GridItem>
				<Layout.GridItem colSpan={{ sm: 1, md: 3, xl: 8 }}>
					<HeroIntroArea />
				</Layout.GridItem>
			</Layout.Grid>
		</Layout.Container>
	);
}
