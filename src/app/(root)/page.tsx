import Image from 'next/image';
import HeroSection from './hero/hero-section';
import ServicesSection from './services/services-section';
import BackgroundPattern from '@/components/ui/background-pattern';
import ProjectsSection from './projects/projects-section';
// import Section from '@/components/ui/custom-section-structure';
import {
	Section,
	Container,
	Content,
} from '@/components/ui/custom-container-structure';

export default function Home() {
	return (
		<>
			<Section className='relative block lg:min-h-screen overflow-clip'>
				<Container fullWidth>
					<Image
						src='/images/bg_tech_01.webp'
						alt='Hero image'
						fill
						className='w-full h-full object-cover object-center -z-20'
					/>
				</Container>
				<Container fullWidth>
					<div className='absolute inset-0 bg-background opacity-85 -z-10'></div>
				</Container>
				<HeroSection />
				<Container>
					<BackgroundPattern />
				</Container>
			</Section>

			<Section className='relative block lg:min-h-screen overflow-clip'>
				<Container fullWidth>
					<Image
						src='/images/bg_tech_02.webp'
						alt='Hero image'
						fill
						className='w-full h-full object-cover object-center -z-20'
					/>
				</Container>
				<Container fullWidth>
					<div className='absolute inset-0 bg-background opacity-85 -z-10' />
				</Container>
				<ServicesSection />
				<Container>
					<BackgroundPattern />
				</Container>
			</Section>
			{/*<Section className='relative block lg:min-h-screen overflow-clip'>
				<Section.Item>
					<Image
						src='/images/bg_tech_03.webp'
						alt='Hero image'
						fill
						className='w-full h-full object-cover object-center -z-20'
					/>
				</Section.Item>
				<Section.Item>
					<div className='absolute inset-0 bg-background opacity-85 -z-10' />
				</Section.Item>
				<ProjectsSection />
				<Section.Item>
					<BackgroundPattern />
				</Section.Item>
			</Section> */}
		</>
	);
}
