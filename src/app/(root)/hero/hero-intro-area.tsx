import Section from '@/components/ui/custom-section';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { HERO_DATA } from '@/constants/constants';
import Image from 'next/image';

export default function HeroIntroArea() {
	return (
		<Section.ContentContainer className='md:col-span-6'>
			<Card className='mt-12 bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'>
				<CardContent>
					<p className='text-lg/relaxed text-balance max-w-prose mx-auto pt-3'>
						As a web developer, I work with real passion and motivation. I am
						interested in many technologies, but dive deep when something
						excites me. As a &quot;generalized specialist&quot;, I&apos;m
						interested in providing reliable, practical solution, fascinated for
						consistently produced clean code and go above and beyond what is
						required.
					</p>
				</CardContent>
			</Card>
			<Section.ContentContainer className='mt-12'>
				<Section.GridContainer className='gap-6'>
					{HERO_DATA.map(item => (
						<div key={item.id} className='col-span-4 xl:col-span-3'>
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
				</Section.GridContainer>
			</Section.ContentContainer>
		</Section.ContentContainer>
	);
}
