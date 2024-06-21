'use client';

import { useState } from 'react';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { generateRange } from '@/lib/utils';

const buttonAnimationVariants = {
	initial: (i: number) => ({
		x: i % 2 === 0 ? '-100%' : '100%',
		opacity: 0,
	}),
	animate: (i: number) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: i * 0.3,
			duration: 0.5,
		},
	}),
};

const overlayAnimationVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 0.8, transition: { duration: 0.5 } },
};

const range = generateRange(0, 2);

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);

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
							<div
								className='relative mt-12 z-10 w-fit mx-auto'
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<Image
									src='/images/profile_image.jpg'
									alt='Profile image from Stefan Ihle'
									width={552}
									height={736}
									className='aspect-auto h-[450px] w-auto rounded-3xl object-cover object-center shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
								/>
								<AnimatePresence>
									{isHovered && (
										<>
											<motion.div
												initial='initial'
												animate='animate'
												exit='initial'
												variants={overlayAnimationVariants}
												className='absolute inset-0 bg-background rounded-3xl z-10'
											/>
											<motion.div
												initial='initial'
												animate='animate'
												exit='initial'
												className='absolute inset-0 flex flex-col justify-center items-center rounded-3xl z-20'
											>
												{range.map((_, i) => (
													<motion.div
														key={i}
														custom={i}
														variants={buttonAnimationVariants}
														className='w-1/2 mb-4'
													>
														<Button className='w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-zinc-900/60 dark:shadow-zinc-100/60'>
															{i === 0 ? (
																<>
																	<ArrowLeft />
																	Reach Me
																</>
															) : (
																<>
																	My Stuff
																	<ArrowRight />
																</>
															)}
														</Button>
													</motion.div>
												))}
											</motion.div>
										</>
									)}
								</AnimatePresence>
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
