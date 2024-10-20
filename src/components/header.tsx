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
import { Layout } from './ui/custom-container-structure';

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
	const [clicked, setClicked] = useState<boolean>(false);

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
				'sticky z-20 h-20 inset-x-0 top-0 w-full',
				hasShadow
					? 'bg-[rgba(217,217,217,0.7)] dark:bg-[rgba(27,25,24,0.7)] backdrop-blur-lg border-b border-primary transition-all shadow-md shadow-[#1b1918]/15 duration-200'
					: 'bg-transparent',
			)}
		>
			<Layout.Flex noSpacingY justify='between' items='center'>
				<Link href='/' className='pt-5 md:pt-0'>
					<div className='flex gap-x-6 justify-center items-center'>
						<div className='p-1 text-center w-[50px] skew-y-[20deg] skew-x-12 font-semibold text-sm bg-gradient-to-r from-primary to-secondary text-background'>
							me
						</div>
						<div className='p-1 w-[100px] text-center -skew-y-[8deg] skew-x-6 scale-[1.05] font-semibold text-sm bg-gradient-to-r from-secondary to-primary text-background'>
							codetechify
						</div>
					</div>
				</Link>
				<ul className='hidden md:flex gap-x-6 items-center ml-auto h-full'>
					{filteredNavigation.map(({ href, name }) => {
						return (
							<li
								key={href}
								className={cn(
									'flex items-center relative text-base font-semibold from-primary to-secondary',
									{
										'text-transparent bg-clip-text bg-gradient-to-r':
											activePathname === href,
										'text-primary': activePathname !== href,
									},
								)}
							>
								<Link href={href} className='block'>
									{name}
								</Link>

								{activePathname === href && (
									<motion.div
										layoutId='header-active-link'
										className='bg-primary h-px w-full absolute top-8'
									></motion.div>
								)}
							</li>
						);
					})}
				</ul>
				<Separator
					orientation='vertical'
					className={cn(
						'hidden md:block w-px ml-3 h-1/2',
						hasShadow ? 'bg-secondary' : 'bg-primary',
					)}
				/>
				<div className='hidden md:block ml-3 py-3'>
					<SignedOut>
						<SignInButton>
							<span className='flex items-center relative text-base font-semibold text-primary'>
								<LogIn className='w-6 h-6' />
							</span>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<SignOutButton>
							<span
								className={cn(
									'items-center relative  text-base font-semibold text-primary',
									clicked ? 'flex md:hidden' : 'hidden md:flex',
								)}
							>
								<LogOut className='w-6 h-6' />
							</span>
						</SignOutButton>
					</SignedIn>
				</div>
				<div className='hidden md:block ml-3 py-3'>
					<ThemeToggler />
				</div>
				<div className='ml-auto md:hidden pt-5 md:pt-0'>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								onClick={() => setClicked(prevState => !prevState)}
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
								<ThemeToggler />
							</div>
							<div className='block md:hidden absolute top-6 left-16'>
								<SignedOut>
									<SignInButton>
										<span className='flex items-center relative text-base font-semibold text-primary'>
											<LogIn className='w-6 h-6' />
										</span>
									</SignInButton>
								</SignedOut>
								<SignedIn>
									<SignOutButton>
										<span
											className={cn(
												'items-center relative  text-base font-semibold text-primary',
												clicked ? 'flex md:hidden' : 'hidden md:flex',
											)}
										>
											<LogOut className='w-6 h-6' />
										</span>
									</SignOutButton>
								</SignedIn>
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
			</Layout.Flex>
		</motion.nav>
	);
}
