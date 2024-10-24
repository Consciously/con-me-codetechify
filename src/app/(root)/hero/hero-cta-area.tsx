'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn, generateRange } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type HeroCtaAreaProps = {
	files: string[];
};

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

export default function HeroCtaArea({ files }: HeroCtaAreaProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div
				className='relative z-10 w-fit mx-auto'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Image
					src={files[0]}
					alt='Profile image from Stefan Ihle'
					width={552}
					height={736}
					className='aspect-auto h-[420px] w-auto rounded-3xl object-cover object-center border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
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
										className='w-2/3 mb-4'
									>
										<Button
											className={cn(
												'w-full bg-transparent bg-gradient-to-tr shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
												{
													'from-primary to-secondary': i === 0,
													'from-secondary to-primary': i === 1,
												},
											)}
										>
											{i === 0 ? (
												<>
													<ArrowLeft className='mr-2' />
													Reach Me
												</>
											) : (
												<>
													My Stuff
													<ArrowRight className='ml-2' />
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
	);
}
