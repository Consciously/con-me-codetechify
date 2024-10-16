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

export function ThemeToggler() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='hover:bg-transparent hover:text-secondary focus-visible:text-secondary focus-visible:bg-transparent'
					size='icon'
				>
					<Sun className='absolute h-6 w-6 text-primary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute h-6 w-6 text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
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
