'use client';

import { useState } from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { generateRange } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

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
	animate: { opacity: 0.65, transition: { duration: 0.5 } },
};

const range = generateRange(0, 2);

export default function HeroSection() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<MaxWidthWrapper>
			<div className='grid grid-cols-12 gap-6 my-12 md:my-24 xl:my-48'>
				<div className='col-span-full'>
					<h1 className='text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Driven by Passion, Committed to Excellence
					</h1>
					<p className='text-lg/relaxed text-balance text-center'>
						Building Deep Expertise and Creative Solutions in Web Development
					</p>
				</div>
				<div className='col-span-full'>
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
							className='aspect-auto h-[450px] w-auto rounded-3xl object-cover object-center border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
						/>
						<AnimatePresence>
							{isHovered && (
								<>
									<motion.div
										initial='initial'
										animate='animate'
										exit='initial'
										variants={overlayAnimationVariants}
										className='absolute inset-[2px] bg-background rounded-3xl z-10'
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
												<Button className='w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
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
				<div className='col-span-full'>
					<Card className='mt-12 bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
						<CardContent>
							<p className='text-lg/relaxed text-balance max-w-prose mx-auto pt-3'>
								I&apos;m a web developer driven by passion and intrinsic
								motivation. I focus on mastering a few technologies deeply
								rather than superficially covering many. I strive for excellence
								by continuously learning and solving specific problems
								effectively. Freelancing appeals to me for its independence, and
								I&apos;m excited about creating my own SaaS product. Following
								my passion is crucial for a fulfilling life and career.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
