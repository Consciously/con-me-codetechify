'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { LogIn, LogOut, MenuIcon } from 'lucide-react';
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

type NavItem = { name: string; href: string; requiredAuth?: boolean };

const NAVIGATION_DATA: NavItem[] = [
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

const isActiveRoute = (pathname: string, href: string) => {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
};

function BrandMark({ className }: { className?: string }) {
	return (
		<Link
			href='/'
			className={cn(
				'inline-flex items-center gap-x-4 rounded-xl p-1',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
				className,
			)}
			aria-label='Go to home'
		>
			<motion.div
				whileHover={{ y: -1 }}
				whileTap={{ scale: 0.98 }}
				className='flex gap-x-4 justify-center items-center'
			>
				<div className='p-1 text-center w-[54px] skew-y-[18deg] skew-x-12 font-semibold text-sm tracking-tight bg-gradient-to-r from-primary to-secondary text-background shadow-sm shadow-zinc-900/20 dark:shadow-zinc-100/10'>
					me
				</div>
				<div className='p-1 w-[120px] text-center -skew-y-[8deg] skew-x-6 scale-[1.05] font-semibold text-sm tracking-tight bg-gradient-to-r from-secondary to-primary text-background shadow-sm shadow-zinc-900/20 dark:shadow-zinc-100/10'>
					codetechify
				</div>
			</motion.div>
		</Link>
	);
}

export default function Header() {
	const { scrollY } = useScroll();
	const [hasShadow, setHasShadow] = useState<boolean>(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

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

	const filteredNavigation = useMemo(
		() => NAVIGATION_DATA.filter(item => !item.requiredAuth || isSignedIn),
		[isSignedIn],
	);

	return (
		<motion.nav
			className={cn(
				'sticky z-20 inset-x-0 top-0 w-full',
				'h-16',
				hasShadow
					? 'bg-[rgba(217,217,217,0.75)] dark:bg-[rgba(27,25,24,0.75)] backdrop-blur-lg border-b border-primary/40 shadow-md shadow-[#1b1918]/10 dark:shadow-zinc-100/10'
					: 'bg-transparent border-b border-transparent',
			)}
		>
			<Layout.Flex
				noSpacing
				justify='between'
				items='center'
				className='px-3 sm:px-5 md:px-7 lg:px-9 xl:px-11 h-16'
			>
				<BrandMark />

				{/* Desktop nav */}
				<ul className='hidden md:flex items-center gap-x-2 ml-auto'>
					{filteredNavigation.map(({ href, name }) => {
						const isActive = isActiveRoute(activePathname, href);
						return (
							<li key={href} className='relative'>
								<Link
									href={href}
									aria-current={isActive ? 'page' : undefined}
									className={cn(
										'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
										isActive
											? 'text-background bg-gradient-to-r from-primary to-secondary shadow-sm shadow-zinc-900/20 dark:shadow-zinc-100/10'
											: 'text-primary hover:bg-primary/10 dark:hover:bg-primary/20',
									)}
								>
									{name}
								</Link>
							</li>
						);
					})}
				</ul>

				<div className='hidden md:flex items-center gap-2 ml-3'>
					<Separator orientation='vertical' className='h-6 bg-primary/30' />
					<div className='flex items-center gap-1 rounded-full border border-primary/30 bg-background/30 px-2 py-1'>
						<ThemeToggler />
						<SignedOut>
							<SignInButton>
								<Button
									variant='ghost'
									size='icon'
									className='hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent'
								>
									<LogIn className='h-5 w-5 text-primary' />
									<span className='sr-only'>Sign in</span>
								</Button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<SignOutButton>
								<Button
									variant='ghost'
									size='icon'
									className='hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent'
								>
									<LogOut className='h-5 w-5 text-primary' />
									<span className='sr-only'>Sign out</span>
								</Button>
							</SignOutButton>
						</SignedIn>
					</div>
				</div>

				{/* Mobile nav */}
				<div className='ml-auto md:hidden'>
					<Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
						<SheetTrigger asChild>
							<Button
								size='icon'
								variant='outline'
								className='text-primary border-primary/40 hover:text-secondary hover:border-secondary hover:bg-transparent'
							>
								<MenuIcon className='w-6 h-6' />
								<span className='sr-only'>Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							className='w-[320px] border-r-2 border-primary/30'
							side='left'
						>
							<SheetHeader>
								<SheetTitle className='sr-only'>Navigation</SheetTitle>
							</SheetHeader>

							<div className='mb-6'>
								<BrandMark />
								<p className='mt-3 text-sm text-foreground/70'>
									Portfolio, projects, and admin tools.
								</p>
							</div>

							<div className='rounded-xl border border-primary/20 bg-background/40 p-3'>
								<div className='flex items-center justify-between'>
									<span className='text-sm font-semibold text-primary'>
										Appearance
									</span>
									<ThemeToggler />
								</div>
							</div>

							<ul className='mt-6 flex flex-col gap-2'>
								{filteredNavigation.map(item => {
									const isActive = isActiveRoute(activePathname, item.href);
									return (
										<li key={item.href}>
											<SheetClose asChild>
												<Link
													href={item.href}
													aria-current={isActive ? 'page' : undefined}
													className={cn(
														'flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition',
														'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
														isActive
															? 'bg-primary/10 text-secondary'
															: 'text-primary hover:bg-primary/10',
													)}
												>
													<span>{item.name}</span>
													<span className='text-primary/60'>→</span>
												</Link>
											</SheetClose>
										</li>
									);
								})}
							</ul>

							<div className='mt-8 flex items-center gap-2'>
								<SignedOut>
									<SignInButton>
										<Button className='w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/30 dark:shadow-zinc-100/10'>
											<LogIn className='mr-2 h-5 w-5' />
											Sign in
										</Button>
									</SignInButton>
								</SignedOut>
								<SignedIn>
									<SignOutButton>
										<Button
											variant='outline'
											className='w-full border-primary bg-transparent hover:bg-transparent hover:text-primary'
										>
											<LogOut className='mr-2 h-5 w-5' />
											Sign out
										</Button>
									</SignOutButton>
								</SignedIn>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</Layout.Flex>
		</motion.nav>
	);
}
