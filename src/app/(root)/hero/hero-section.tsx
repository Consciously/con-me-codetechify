'use client';

import HeroHeadingArea from './hero-heading-area';
import HeroCtaArea from './hero-cta-area';
import {
	HeroMotivationalTextAreaSkeleton,
	HeroMotivationalImageAreaSkeleton,
	HeroCtaAreaSkeleton,
} from '@/components/ui/loader';
import { Layout } from '@/components/ui/custom-container-structure';
import { useQuery } from '@tanstack/react-query';
import { getStaticFilesHandler } from '@/app/(root)/hero/actions/actions';
import HeroMotivationalTextArea from './hero-motivational-text-area';
import HeroMotivationalImageArea from './hero-motivational-image-area';

export default function HeroSection() {
	const { data: files, isLoading } = useQuery({
		queryKey: ['static-files'],
		queryFn: async () => getStaticFilesHandler(),
	});

	const { ctaFileUrls, introFileUrls } = files || {};

	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<HeroHeadingArea />
			</Layout.Flex>

			<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }} gap={8}>
				<Layout.GridItem colSpan={{ sm: 1, md: 3, xl: 4 }}>
					{isLoading ? (
						<HeroCtaAreaSkeleton />
					) : (
						ctaFileUrls && <HeroCtaArea files={ctaFileUrls} />
					)}
				</Layout.GridItem>
				<Layout.GridItem colSpan={{ sm: 1, md: 3, xl: 8 }}>
					<div className='space-y-6'>
						{isLoading ? (
							<HeroMotivationalTextAreaSkeleton />
						) : (
							<HeroMotivationalTextArea />
						)}
						{isLoading ? (
							<HeroMotivationalImageAreaSkeleton />
						) : (
							introFileUrls && (
								<HeroMotivationalImageArea
									files={introFileUrls}
									isLoading={isLoading}
								/>
							)
						)}
					</div>
				</Layout.GridItem>
			</Layout.Grid>
		</>
	);
}
