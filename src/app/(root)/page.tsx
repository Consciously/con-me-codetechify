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
				<Layout.Container>
					<Image
						src='/images/bg_tech_01.webp'
						alt='Hero image'
						fill
						className='w-full h-full object-cover object-center -z-20'
					/>
				</Layout.Container>
				<Layout.Container>
					<div className='absolute inset-0 bg-background opacity-85 -z-10'></div>
				</Layout.Container>
				<Layout.Container isCentered>
					<HeroSection />
				</Layout.Container>
				<Layout.Container>
					<BackgroundPattern />
				</Layout.Container>
			</Layout.Section>

			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container>
					<Image
						src='/images/bg_tech_02.webp'
						alt='Hero image'
						fill
						className='w-full h-full object-cover object-center -z-20'
					/>
				</Layout.Container>
				<Layout.Container>
					<div className='absolute inset-0 bg-background opacity-85 -z-10' />
				</Layout.Container>
				<Layout.Container isCentered>
					<ServicesSection />
				</Layout.Container>
				<Layout.Container>
					<BackgroundPattern />
				</Layout.Container>
			</Layout.Section>

			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container>
					<Image
						src='/images/bg_tech_03.webp'
						alt='Hero image'
						fill
						className='w-full h-full object-cover object-center -z-20'
					/>
				</Layout.Container>
				<Layout.Container>
					<div className='absolute inset-0 bg-background opacity-85 -z-10' />
				</Layout.Container>
				<Layout.Container isCentered>
					<ProjectsSection />
				</Layout.Container>
				<Layout.Container>
					<BackgroundPattern />
				</Layout.Container>
			</Layout.Section>
		</>
	);
}
