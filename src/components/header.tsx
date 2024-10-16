'use client';

import { useState, useEffect } from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { MenuIcon, LogIn, LogOut } from 'lucide-react';
import { ThemeToggler } from './theme-toggler';
import { Separator } from './ui/separator';
import {
	SignInButton,
	SignedIn,
	SignedOut,
	SignOutButton,
} from '@clerk/nextjs';
import { useUser } from '@clerk/clerk-react';

const NAVIGATION_DATA = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
	{
		name: 'Admin Dashboard',
		href: '/admin/uploads/json',
		requiredAuth: true,
	},
];

export default function Header() {
	const { scrollY } = useScroll();
	const [hasShadow, setHasShadow] = useState<boolean>(false);

	const { isSignedIn } = useUser();

	useEffect(() => {
		const unsubscribe = scrollY.on('change', latest => {
			if (latest > 50) {
				setHasShadow(true);
			} else {
				setHasShadow(false);
			}
		});
		return () => unsubscribe();
	}, [scrollY]);

	const activePathname = usePathname();

	const filteredNavigation = NAVIGATION_DATA.filter(item => {
		if (item.requiredAuth) {
			return isSignedIn;
		}
		return true;
	});

	return (
		<motion.nav
			className={cn(
				'sticky z-[80] h-16 inset-x-0 top-0 w-full bg-[rgb(217, 217, 217,0.2)] dark:bg-[rgb(27, 25, 24,0.2)]',
				hasShadow
					? 'bg-gradient-to-r from-primaryLightTransparent dark:from-primaryDarkTransparent to-secondaryLightTransparent dark:bg-secondaryDarkTransparent backdrop-blur-xl border-b border-primary transition-all shadow-md shadow-[#1b1918]/15 dark:shadow-[#e6e6e6]]/15 duration-200'
					: '',
			)}
		>
			<MaxWidthWrapper className='flex items-center'>
				<div className='flex justify-center items-center'>
					<Link href='/'>
						<div className='flex gap-x-6 justify-center items-center'>
							<div
								className={cn(
									'p-1 text-center w-[50px] skew-y-[20deg] skew-x-12 font-semibold text-sm',
									hasShadow
										? 'bg-[#1b1918] text-secondary'
										: 'bg-gradient-to-r from-primary to-secondary text-background',
								)}
							>
								me
							</div>
							<div
								className={cn(
									'p-1 w-[100px] text-center -skew-y-[8deg] skew-x-6 scale-[1.05]  font-semibold text-sm',
									hasShadow
										? 'bg-[#1b1918] text-secondary'
										: 'bg-gradient-to-r from-secondary to-primary text-background',
								)}
							>
								codetechify
							</div>
						</div>
					</Link>
				</div>
				<ul className='hidden md:flex gap-x-6 items-center ml-auto h-full'>
					{filteredNavigation.map(({ href, name }) => {
						return (
							<li
								key={href}
								className={cn(
									'flex items-center relative text-base font-semibold',
									{
										'text-transparent bg-clip-text bg-gradient-to-r':
											activePathname === href,
										'text-primary': activePathname !== href,
									},
									hasShadow ? 'text-background' : 'from-primary to-secondary',
								)}
							>
								<Link href={href} className='block'>
									{name}
								</Link>

								{activePathname === href && (
									<motion.div
										layoutId='header-active-link'
										className={cn(
											'bg-primary h-1 w-full absolute top-8',
											hasShadow && 'bg-background',
										)}
									></motion.div>
								)}
							</li>
						);
					})}
				</ul>
				<Separator
					orientation='vertical'
					className='hidden md:block bg-secondaryLightTransparent dark:bg-secondaryDarkTransparent ml-3'
				/>
				<div className='ml-3 py-3'>
					<SignedOut>
						<SignInButton>
							<span
								className={cn(
									'flex items-center relative text-base font-semibold ',
									hasShadow ? 'text-background' : 'text-primary',
								)}
							>
								<LogIn className='w-6 h-6' />
							</span>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<SignOutButton>
							<span className='flex items-center relative  text-base font-semibold text-primary'>
								<LogOut className='w-6 h-6' />
							</span>
						</SignOutButton>
					</SignedIn>
				</div>
				<div className='hidden md:block ml-3 py-3'>
					<ThemeToggler hasShadow={hasShadow} />
				</div>
				<div className='ml-auto md:hidden'>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								size='icon'
								variant='outline'
								className='text-primary border-primary hover:text-secondary hover:border-secondary hover:bg-transparent'
							>
								<MenuIcon className='w-6 h-6' />
								<span className='sr-only'>Toggle navigation</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							className='w-[300px] border-r-2 border-primary z-[100]'
							side='left'
						>
							<div className='block md:hidden absolute top-4 left-4'>
								<ThemeToggler hasShadow={hasShadow} />
							</div>
							<ul className='flex flex-col gap-y-12 justify-center items-center w-full mt-12'>
								{NAVIGATION_DATA.map((item, index) => (
									<li
										key={index}
										className={cn(
											'relative w-full text-center text-base font-semibold',
											{
												'text-secondary': activePathname === item.href,
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
												className='bg-primary h-1 w-1/3 absolute inset-8 mx-auto'
											></motion.div>
										)}
									</li>
								))}
							</ul>
						</SheetContent>
					</Sheet>
				</div>
			</MaxWidthWrapper>
		</motion.nav>
	);
}
