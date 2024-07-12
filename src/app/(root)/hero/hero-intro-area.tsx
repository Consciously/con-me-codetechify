import Container from '@/components/ui/custom-container';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { HERO_DATA } from '@/constants/constants';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Spacer from '@/components/ui/spacer';

export default function HeroIntroArea() {
	return (
		<Container.Content className='md:col-span-6'>
			<Spacer variant='large'>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					My Developer Journey and Core Values
				</h4>
				<Card className='mt-12 bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
					<CardContent>
						<p className='text-lg/relaxed text-balance max-w-prose mx-auto pt-3'>
							As a web developer, I work with real passion and motivation. I am
							interested in many technologies, but dive deep when something
							excites me. As a &quot;generalized specialist&quot;, I&apos;m
							interested in providing reliable, practical solution, fascinated
							for consistently produced clean code and go above and beyond what
							is required.
						</p>
					</CardContent>
				</Card>
				<Container.Content>
					<Spacer variant='small'>
						<ScrollArea className='w-full whitespace-nowrap'>
							<div className='flex w-max gap-6'>
								{HERO_DATA.map(item => (
									<div key={item.id} className='flex-1 w-full'>
										<Card className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
											<CardHeader className='flex justify-center items-center h-[50px]'>
												<p className='text-sm/relaxed text-balance text-center font-semibold'>
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
					</Spacer>
				</Container.Content>
			</Spacer>
		</Container.Content>
	);
}
