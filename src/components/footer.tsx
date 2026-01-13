'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Layout } from '@/components/ui/custom-container-structure';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

type NavItem = { name: string; href: string; requiredAuth?: boolean };

const NAVIGATION_DATA: NavItem[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Admin', href: '/admin/uploads/json', requiredAuth: true },
];

function FooterBrand() {
	return (
		<Link
			href='/'
			className={cn(
				'inline-flex items-center gap-x-4 rounded-xl p-1',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
			)}
			aria-label='Go to home'
		>
			<div className='flex gap-x-4 justify-center items-center'>
				<div className='p-1 text-center w-[54px] skew-y-[18deg] skew-x-12 font-semibold text-sm tracking-tight bg-gradient-to-r from-primary to-secondary text-background shadow-sm shadow-zinc-900/20 dark:shadow-zinc-100/10'>
					me
				</div>
				<div className='p-1 w-[120px] text-center -skew-y-[8deg] skew-x-6 scale-[1.05] font-semibold text-sm tracking-tight bg-gradient-to-r from-secondary to-primary text-background shadow-sm shadow-zinc-900/20 dark:shadow-zinc-100/10'>
					codetechify
				</div>
			</div>
		</Link>
	);
}

export default function Footer() {
	const { isSignedIn } = useUser();

	const navItems = useMemo(
		() => NAVIGATION_DATA.filter(item => !item.requiredAuth || isSignedIn),
		[isSignedIn],
	);

	const year = new Date().getFullYear();

	return (
		<footer className='relative border-t border-primary/30'>
			<div className='absolute inset-0 -z-10 bg-[rgba(217,217,217,0.5)] dark:bg-[rgba(27,25,24,0.5)] backdrop-blur-lg' />

			<Layout.Section noSpacing className='py-12 md:py-16'>
				<Layout.Container isCentered>
					<div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
						<div className='lg:col-span-5 space-y-4'>
							<FooterBrand />
							<p className='max-w-md text-sm text-foreground/70'>
								Crafting modern web experiences—clean UI, strong UX, and reliable
								shipping.
							</p>

							<div className='flex flex-wrap items-center gap-3'>
								<a
									href='https://github.com'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/30 px-3 py-2 text-sm font-semibold text-primary hover:text-secondary hover:border-secondary/40 transition'
								>
									<Github className='h-4 w-4' />
									GitHub
									<ArrowUpRight className='h-4 w-4 opacity-70' />
								</a>
								<a
									href='https://www.linkedin.com'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/30 px-3 py-2 text-sm font-semibold text-primary hover:text-secondary hover:border-secondary/40 transition'
								>
									<Linkedin className='h-4 w-4' />
									LinkedIn
									<ArrowUpRight className='h-4 w-4 opacity-70' />
								</a>
								<a
									href='mailto:hello@codetechify.dev'
									className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/30 px-3 py-2 text-sm font-semibold text-primary hover:text-secondary hover:border-secondary/40 transition'
								>
									<Mail className='h-4 w-4' />
									Contact
								</a>
							</div>
						</div>

						<div className='lg:col-span-7 grid grid-cols-1 gap-8 sm:grid-cols-2'>
							<div className='space-y-3'>
								<p className='text-sm font-semibold text-primary'>Navigation</p>
								<ul className='space-y-2'>
									{navItems.map(item => (
										<li key={item.href}>
											<Link
												href={item.href}
												className='text-sm text-foreground/70 hover:text-secondary transition inline-flex items-center gap-2'
											>
												<span>{item.name}</span>
												<span className='text-primary/50'>→</span>
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className='space-y-4'>
								<p className='text-sm font-semibold text-primary'>Stay in touch</p>
								<Card className='bg-background/30 border-primary/20'>
									<CardHeader className='pb-2'>
										<p className='text-sm font-semibold'>Newsletter</p>
										<p className='text-xs text-foreground/70'>
											Placeholder only—no emails sent yet.
										</p>
									</CardHeader>
									<CardContent className='space-y-3'>
										<input
											disabled
											placeholder='you@example.com'
											className='w-full rounded-md border border-primary/20 bg-background/40 px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 outline-none'
										/>
										<Button disabled className='w-full'>
											Subscribe
										</Button>
									</CardContent>
								</Card>

								<Button
									variant='outline'
									className='w-full border-primary/30 bg-transparent hover:bg-transparent hover:text-primary'
									onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
								>
									<ArrowUp className='mr-2 h-4 w-4' />
									Back to top
								</Button>
							</div>
						</div>
					</div>

					<Separator className='my-10 bg-primary/20' />

					<div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
						<p className='text-xs text-foreground/60'>
							© {year} codetechify. All rights reserved.
						</p>
						<div className='flex items-center gap-4 text-xs text-foreground/60'>
							<Link href='/' className='hover:text-secondary transition'>
								Home
							</Link>
							<Link href='/projects' className='hover:text-secondary transition'>
								Projects
							</Link>
						</div>
					</div>
				</Layout.Container>
			</Layout.Section>
		</footer>
	);
}
