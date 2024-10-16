import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export function HeroMotivationalTextAreaSkeleton() {
	return (
		<>
			<Skeleton className='h-8 w-48 mb-4' />
			<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
				<CardContent>
					<div className='space-y-2 pt-3'>
						<Skeleton className='h-4 w-full' />
						<Skeleton className='h-4 w-5/6' />
						<Skeleton className='h-4 w-4/5' />
					</div>
				</CardContent>
			</Card>
		</>
	);
}

export function HeroMotivationalImageAreaSkeleton() {
	return (
		<ScrollArea className='w-full whitespace-nowrap'>
			<div className='flex w-max gap-6'>
				{[1, 2, 3, 4].map(item => (
					<div key={item} className='flex-1 w-[250px]'>
						<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
							<CardHeader className='flex justify-center items-center h-[50px]'>
								<Skeleton className='h-4 w-3/4' />
							</CardHeader>
							<CardContent className='p-0'>
								<Skeleton className='h-32 w-full' />
							</CardContent>
						</Card>
					</div>
				))}
			</div>
			<ScrollBar orientation='horizontal' />
		</ScrollArea>
	);
}

export function HeroCtaAreaSkeleton() {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='relative z-10 w-fit mx-auto'>
				<Skeleton className='h-[420px] w-[315px] rounded-3xl' />
			</div>
		</div>
	);
}
