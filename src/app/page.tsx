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
				<div className='absolute inset-0 bg-background opacity-85 bg-opacity-50 -z-10'></div>
				<MaxWidthWrapper>
					<div className='grid grid-cols-12 gap-6 my-12 md:my-24 xl:my-48'>
						<div className='col-span-full'>
							<h1 className='text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold tracking-tight text-center'>
								Hello World!
							</h1>
							<p className='text-lg/relaxed text-balance text-center'>
								This is a simple portfolio website built with Next.js and
								Tailwind CSS. It is a work in progress and will be updated
							</p>
							<div className='flex flex-col mt-12 gap-6'>
								<Button className='flex-1 w-1/2 mx-auto lg:py-3 bg-transparent bg-gradient-to-tr from-primary to-secondary'>
									Reach Me <ArrowRight />
								</Button>
								<Button className='flex-1 w-1/2 mx-auto lg:py-3 bg-transparent bg-gradient-to-tr from-secondary to-primary'>
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
