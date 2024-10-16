'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

type ThemeTogglerType = {
	hasShadow: boolean;
};

export function ThemeToggler({ hasShadow }: ThemeTogglerType) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent'
					size='icon'
				>
					<Sun
						className={cn(
							'absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
							hasShadow ? 'text-background' : 'text-primary',
						)}
					/>
					<Moon
						className={cn(
							'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
							hasShadow ? 'text-background' : 'text-primary',
						)}
					/>
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='center'
				side='right'
				className='border-primary relative z-[100] flex'
			>
				<DropdownMenuItem
					className='text-primary hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent font-semibold'
					onClick={() => setTheme('light')}
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className='text-primary hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent font-semibold'
					onClick={() => setTheme('dark')}
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className='text-primary hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent font-semibold'
					onClick={() => setTheme('system')}
				>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
