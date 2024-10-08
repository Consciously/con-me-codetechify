'use client';

import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import HeroIntroArea from './hero-intro-area';
import { Layout } from '@/components/ui/custom-container-structure';
import { useQuery } from '@tanstack/react-query';
import { getStaticFilesHandler } from '@/app/(root)/hero/actions/actions';

export default function HeroSection() {
	const { data: files, isLoading } = useQuery({
		queryKey: ['static-files'],
		queryFn: async () => getStaticFilesHandler(),
	});

	const { ctaFileUrls, introFileUrls } = files || {};

	if (isLoading) return <div>Loading...</div>;

	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<HeroHeadingArea />
			</Layout.Flex>

			<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }} gap={8}>
				<Layout.GridItem colSpan={{ sm: 1, md: 3, xl: 4 }}>
					{ctaFileUrls && <HeroCtaArea files={ctaFileUrls} />}
				</Layout.GridItem>
				<Layout.GridItem colSpan={{ sm: 1, md: 3, xl: 8 }}>
					{introFileUrls && <HeroIntroArea files={introFileUrls} />}
				</Layout.GridItem>
			</Layout.Grid>
		</>
	);
}
