import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
				<MaxWidthWrapper>
					<div className='grid grid-cols-12 gap-6 my-12 md:my-24 xl:my-48'>
						<div className='col-span-full'>
							<h1 className='text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
								Hello World!
							</h1>
							<p className='text-lg/relaxed text-balance text-center'>
								This is a simple portfolio website built with ~Next.js and
								Tailwind CSS. It is a work in progress and will be updated
							</p>
							<div className='relative mt-12 z-10 overflow-hidden w-fit mx-auto'>
								<Image
									src='/images/profile_image.jpg'
									alt='Profile image from Stefan Ihle'
									width={552}
									height={736}
									className='aspect-auto h-72 w-auto rounded-3xl object-cover object-center shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
								/>
								<div className='absolute inset-0 bg-background opacity-10 transition-opacity duration-[450ms] hover:opacity-45 rounded-3xl'></div>
							</div>

							<div className='flex flex-col mt-12 gap-6'>
								<Button className='flex-1 w-1/2 mx-auto lg:py-3 bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-zinc-900/60 dark:shadow-zinc-100/60'>
									Reach Me <ArrowRight />
								</Button>
								<Button className='flex-1 w-1/2 mx-auto lg:py-3 bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
									My Stuff <ArrowRight />
								</Button>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
			<section>Skills and Services</section>
			<section>Projects</section>
			<section>Tech stuff</section>
		</>
	);
}
