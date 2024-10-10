import { Card, CardContent } from '@/components/ui/card';
import H4 from '@/components/ui/h4';
import React from 'react';

export default function HeroMotivationalTextArea() {
	return (
		<>
			<H4>My Developer Journey and Core Values</H4>
			<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
				<CardContent>
					<p className='text-clamp leading-relaxed text-balance max-w-prose mx-auto pt-3'>
						As a web developer, I work with real passion and motivation. I am
						interested in many technologies, but dive deep when something
						excites me. As a &quot;generalized specialist&quot;, I&apos;m
						interested in providing reliable, practical solution, fascinated for
						consistently produced clean code and go above and beyond what is
						required.
					</p>
				</CardContent>
			</Card>
		</>
	);
}
