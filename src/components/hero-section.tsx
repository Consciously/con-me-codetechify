'use client';

import { useState } from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { generateRange } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const HERO_DATA = [
	{ id: 1, title: 'Passion', url: '/images/illustration_keyword_01.webp' },
	{
		id: 2,
		title: 'Overcoming Challenges',
		url: '/images/illustration_keyword_02.webp',
	},
	{
		id: 3,
		title: 'Continuous Learning',
		url: '/images/illustration_keyword_03.webp',
	},
	{
		id: 4,
		title: 'New Technologies',
		url: '/images/illustration_keyword_04.webp',
	},
	{
		id: 5,
		title: 'In-Depth Knowledge',
		url: '/images/illustration_keyword_05.webp',
	},
	{
		id: 6,
		title: 'Generalized Specialist',
		url: '/images/illustration_keyword_06.webp',
	},
	{
		id: 7,
		title: 'Clean Code',
		url: '/images/illustration_keyword_07.webp',
	},
	{
		id: 8,
		title: 'Intrinsic Motivation',
		url: '/images/illustration_keyword_08.webp',
	},
	{
		id: 9,
		title: 'Reliable Solutions',
		url: '/images/illustration_keyword_09.webp',
	},
	{
		id: 10,
		title: 'Practice-Oriented',
		url: '/images/illustration_keyword_10.webp',
	},
	{
		id: 11,
		title: 'Structured Code',
		url: '/images/illustration_keyword_11.webp',
	},
	{
		id: 12,
		title: 'Innovation',
		url: '/images/illustration_keyword_12.webp',
	},
];

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
			<div className='grid grid-cols-12 gap-y-6 my-12 md:my-24 xl:my-48'>
				<div className='col-span-full'>
					<h1 className='text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Driven by Passion, Committed to Excellence
					</h1>
					<p className='text-lg/relaxed text-balance text-center'>
						Building Deep Expertise and Creative Solutions in Web Development
					</p>
				</div>

				<div className='col-span-full md:col-span-6'>
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

				<div className='col-span-full md:col-span-6'>
					<Card className='mt-12 bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
						<CardContent>
							<p className='text-lg/relaxed text-balance max-w-prose mx-auto pt-3'>
								As a web developer, I work with real passion and motivation. I
								am interested in many technologies, but dive deep when something
								excites me. As a &quot;generalized specialist&quot;, I&apos;m
								interested in providing reliable, practical solution, fascinated
								for consistently produced clean code and go above and beyond
								what is required.
							</p>
						</CardContent>
					</Card>
					<div className='col-span-full md:col-span-6 mt-12'>
						<div className='grid grid-cols-12 gap-6'>
							{HERO_DATA.map(item => (
								<div
									key={item.id}
									className='col-span-6 lg:col-span-4 xl:col-span-3'
								>
									<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 min-h-[100px]'>
										<CardHeader className='flex justify-center items-center h-[50px]'>
											<p className='text-sm/relaxed text-balance max-w-prose text-center font-semibold'>
												{item.title}
											</p>
										</CardHeader>
										<CardContent className='relative p-0'>
											<Image
												src={item.url}
												alt={item.title}
												width={1024}
												height={1024}
												className='object-cover w-full h-full'
											/>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
}
