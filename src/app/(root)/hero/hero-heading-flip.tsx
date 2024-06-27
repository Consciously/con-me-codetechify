'use client';

import { useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';
import H1 from '@/components/ui/h1';

const phrases = [
	'Crafting Innovating',
	'Building Cutting-Edge',
	'Creating Exceptional',
	'Designing Advanced',
	'Developing Innovative',
	'Engineering High-Quality',
];

const letterVariants = {
	hidden: {
		opacity: 0,
		rotateY: 90,
	},
	visible: (i: number) => ({
		opacity: 1,
		rotateY: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.8,
		},
	}),
};

export default function HeroHeadingFlip() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % phrases.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const phrase = phrases[index];

	return (
		<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex'>
			{phrase.split('').map((letter, i) => (
				<motion.span
					key={`${phrase}-${i}`}
					custom={i}
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={letterVariants}
					style={{ display: 'inline-block' }}
				>
					{letter}
				</motion.span>
			))}
			{'Web Solutions with  Heart and Skill'}
		</H1>
	);
}
