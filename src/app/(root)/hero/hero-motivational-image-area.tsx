'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { HERO_DATA } from '@/constants/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

type HeroIntroAreaProps = {
	files: string[];
};

export default function MotivationalImageArea({
	files,
}: HeroIntroAreaProps) {
	const isRemote = (src: string) => src.startsWith('http://') || src.startsWith('https://');

	const heroDataWithUrls = HERO_DATA.map((item, index) => ({
		id: item.id,
		title: item.title,
		// Filter out falsy values (undefined, null, empty strings) from remote sources
		url: files?.[index]?.trim() ? files[index] : item.url,
	}));

	return (
		<ScrollArea className='w-full whitespace-nowrap'>
			<div className='flex w-max gap-6'>
				{heroDataWithUrls.map(item => (
					<div key={item.id} className='flex-1 w-full'>
						<Card className='bg-[rgba(217,217,217,0.7)] dark:bg-[rgba(27,25,24,0.7)] backdrop-blur-lg border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
							<CardHeader className='flex justify-center items-center h-[50px]'>
								<p className='text-clamp text-balance text-center font-semibold'>
									{item.title}
								</p>
							</CardHeader>
							<CardContent className='relative overflow-hidden p-0'>
								<figure className='h-32 w-full'>
									{item.url ? (
										<Image
											src={item.url}
											alt={item.title}
											width={1024}
											height={1024}
											unoptimized={isRemote(item.url)}
											className='aspect-square w-full h-full object-cover'
										/>
									) : (
										<div className='h-full w-full bg-background/40' />
									)}
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
