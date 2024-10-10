'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { HERO_DATA } from '@/constants/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Loading from './loading';

type HeroIntroAreaProps = {
	files: string[];
	isLoading: boolean;
};

export default function MotivationalImageArea({
	files,
	isLoading,
}: HeroIntroAreaProps) {
	const heroDataWithUrls = HERO_DATA.map((item, index) => ({
		id: item.id,
		title: item.title,
		url: files?.[index] || item.url, // Fallback to the original URL if files[index] is undefined
	}));

	return (
		<ScrollArea className='w-full whitespace-nowrap'>
			<div className='flex w-max gap-6'>
				{heroDataWithUrls.map(item => (
					<div key={item.id} className='flex-1 w-full'>
						<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
							<CardHeader className='flex justify-center items-center h-[50px]'>
								<p className='text-clamp text-balance text-center font-semibold'>
									{item.title}
								</p>
							</CardHeader>
							<CardContent className='relative overflow-hidden p-0'>
								<figure className='h-32 w-full'>
									<Image
										src={item.url}
										alt={item.title}
										width={1024}
										height={1024}
										className='aspect-square w-full h-full object-cover'
									/>
								</figure>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
			<ScrollBar orientation='horizontal' />
		</ScrollArea>
	);
}
