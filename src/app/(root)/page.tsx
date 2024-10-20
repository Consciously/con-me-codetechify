import Image from 'next/image';
import HeroSection from './hero/hero-section';
import ServicesSection from './services/services-section';
import BackgroundPattern from '@/components/ui/background-pattern';
import { Layout } from '@/components/ui/custom-container-structure';
import ProjectsSection from './projects/projects-section';

export default function Home() {
	return (
		<>
			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container
					size='full'
					noSpacingY
					className='fixed inset-0 bg-cover bg-no-repeat w-full -z-20'
					style={{
						backgroundImage: "url('/images/bg_tech_01.webp')",
					}}
				/>
				<Layout.Container noSpacingY>
					<div className='fixed inset-0 bg-background opacity-85 -z-10'></div>
				</Layout.Container>
				<Layout.Container isCentered>
					<HeroSection />
				</Layout.Container>
			</Layout.Section>
			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container isCentered>
					<ServicesSection />
				</Layout.Container>
			</Layout.Section>
			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container isCentered>
					<ProjectsSection />
				</Layout.Container>
			</Layout.Section>
		</>
	);
}
