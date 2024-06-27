'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import H1 from '@/components/ui/h1';

const phrases = [
	'Crafting Innovating',
	'Building Cutting-Edge',
	'Creating Exceptional',
	'Designing Advanced',
	'Developing Innovative',
	'Engineering High-Quality',
];

const flipVariants = {
	hidden: {
		opacity: 0,
		rotateY: 90,
	},
	visible: {
		opacity: 1,
		rotateY: 0,
		transition: {
			duration: 0.8,
		},
	},
};

export default function HeroHeadingFlip() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % phrases.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div style={{ perspective: 1000 }}>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={flipVariants}
				key={index}
				style={{
					display: 'inline-block',
					padding: '20px',
					backgroundColor: '#fff',
					borderRadius: '10px',
					boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
				}}
			>
				<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
					{phrases[index]} Web Solutions with Heart and Skill
				</H1>
			</motion.div>
		</div>
	);
}
