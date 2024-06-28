'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
		rotateX: 90,
	},
	visible: (i: number) => ({
		opacity: 1,
		rotateX: 0,
		transition: {
			delay: i * 0.05,
			duration: 0.5,
		},
	}),
	exit: {
		opacity: 0,
		rotateX: -90,
		transition: {
			duration: 0.5,
		},
	},
};

const headingVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.8,
		},
	},
};

export default function HeroHeadingFlip() {
	const [index, setIndex] = useState(0);
	const [phraseWidth, setPhraseWidth] = useState(0);
	const phraseRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % phrases.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (phraseRef.current) {
			const phraseWidths = phrases.map(phrase => {
				const testSpan = document.createElement('span');
				testSpan.style.visibility = 'hidden';
				testSpan.style.position = 'absolute';
				testSpan.style.whiteSpace = 'nowrap';
				testSpan.style.fontSize = window.getComputedStyle(
					phraseRef.current!,
				).fontSize;
				testSpan.style.fontFamily = window.getComputedStyle(
					phraseRef.current!,
				).fontFamily;
				testSpan.innerHTML = phrase.split(' ').join('&nbsp;'); // Ensure spaces are counted
				document.body.appendChild(testSpan);
				const width = testSpan.offsetWidth;
				document.body.removeChild(testSpan);
				return width;
			});
			setPhraseWidth(Math.max(...phraseWidths));
		}
	}, [phraseRef]);

	const phrase = phrases[index];
	const staticText = ' Web Solutions with Heart and Skill';

	return (
		<motion.div
			style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}
			initial='hidden'
			animate='visible'
			variants={headingVariants}
		>
			<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
				<span
					ref={phraseRef}
					style={{
						display: 'inline-flex',
						justifyContent: 'center',
						width: `${phraseWidth}px`,
					}}
				>
					<AnimatePresence>
						{phrase.split('').map((letter, i) => (
							<motion.span
								key={`${phrase}-${i}`}
								custom={i}
								initial='hidden'
								animate='visible'
								exit='exit'
								variants={letterVariants}
								style={{ display: 'inline-block' }}
							>
								{letter === ' ' ? '\u00A0' : letter}{' '}
								{/* Ensure spaces are rendered */}
							</motion.span>
						))}
					</AnimatePresence>
				</span>
				{staticText}
			</H1>
		</motion.div>
	);
}
