'use client';

import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import { ThemeToggler } from './theme-toggler';
import { Separator } from './ui/separator';

const NAVIGATION_DATA = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
];

export default function Header() {
	const activePathname = usePathname();
	const router = useRouter();

	return (
		<nav className='h-16 w-full border-b-2 border-accent shadow-md shadow-zinc-900/15 dark:shadow-zinc-500/10'>
			<MaxWidthWrapper className='flex items-center'>
				<div className='flex justify-center items-center h-full'>
					<Link href='/' className='w-16 h-16'>
						<Image
							src='/images/logo2.webp'
							alt='logo of codetechify'
							width={1024}
							height={1024}
							className='h-full w-auto object-cover'
						/>
					</Link>
				</div>
				<ul className='hidden md:flex gap-x-6 items-center ml-auto h-full'>
					{NAVIGATION_DATA.map((item, index) => (
						<li
							key={index}
							className={cn(
								'flex items-center relative  text-sm font-semibold',
								{
									'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary':
										activePathname === item.href,
									'text-primary': activePathname !== item.href,
								},
							)}
						>
							<Link href={item.href} className='block'>
								{item.name}
							</Link>

							{activePathname === item.href && (
								<motion.div
									layoutId='header-active-link'
									className='bg-primary h-1 w-full absolute top-6'
								></motion.div>
							)}
						</li>
					))}
				</ul>
				<Separator
					orientation='vertical'
					className='hidden md:block bg-accent ml-3'
				/>
				<div className='hidden md:block ml-3 py-3'>
					<ThemeToggler />
				</div>
				<div className='ml-auto md:hidden'>
					<Sheet>
						<SheetTrigger asChild>
							<Button size='icon' variant='outline'>
								<MenuIcon className='w-6 h-6' />
								<span className='sr-only'>Toggle navigation</span>
							</Button>
						</SheetTrigger>
						<SheetContent className='w-[300px]' side='right'>
							{NAVIGATION_DATA.map(item => (
								<div className='flex flex-col gap-4 p-6' key={item.name}>
									<Link
										className='relative text-zinc-500 hover:text-zinc-900 active:text-zinc-900 before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0 before:rounded-full before:bg-zinc-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50'
										href={item.href}
									>
										{item.name}
									</Link>
								</div>
							))}
						</SheetContent>
					</Sheet>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
}
