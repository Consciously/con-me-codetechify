import Image from 'next/image';
import HeroSection from './hero/hero-section';

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
				<HeroSection />
			</section>
			<section>Skills and Services</section>
			<section>Projects</section>
			<section>Tech stuff</section>
		</>
	);
}
