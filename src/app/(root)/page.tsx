import Image from 'next/image';
import HeroSection from './hero/hero-section';
import ServicesSection from './services/services-section';
import BackgroundPattern from '@/components/ui/background-pattern';

export default function Home() {
	return (
		<>
			<section className='relative block lg:min-h-screen'>
				<Image
					src='/images/bg_tech_01.webp'
					alt='Hero image'
					fill
					className='w-full h-full object-cover object-center -z-20'
				/>
				<div className='grainy-light absolute inset-0 -z-30'></div>
				<div className='absolute inset-0 bg-background opacity-85 -z-10'></div>
				<div className='diagonal-cover' />
				<HeroSection />
				<BackgroundPattern />
			</section>

			<section className='relative block lg:min-h-screen'>
				<Image
					src='/images/bg_tech_02.webp'
					alt='Hero image'
					fill
					className='w-full h-full object-cover object-center -z-20'
				/>
				<div className='grainy-light absolute inset-0 -z-30' />
				<div className='absolute inset-0 bg-background opacity-85 -z-10' />
				<div className='diagonal-cover' />
				<ServicesSection />
			</section>
			{/* <section>Projects</section>
			<section>Tech stuff</section> */}
		</>
	);
}
