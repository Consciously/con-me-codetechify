'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { setConsent, getConsentStatus } from '@/app/actions/actions';
import { type ConsentTypeValues, consentSchema } from '@/lib/validation';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ConsentBanner() {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [showPreferences, setShowPreferences] = useState<boolean>(false);

	useEffect(() => {
		const checkConsentStatus = async () => {
			const consentGiven = await getConsentStatus();
			if (consentGiven) setIsVisible(false);
		};
		void checkConsentStatus();
	}, []);

	const form = useForm<ConsentTypeValues>({
		resolver: zodResolver(consentSchema),
		defaultValues: {
			necessary: true,
			analytics: false,
			marketing: false,
		},
	});

	const router = useRouter();

	const handleAcceptAll = () => {
		form.setValue('necessary', true);
		form.setValue('analytics', true);
		form.setValue('marketing', true);
		form.handleSubmit(onSubmit)();
	};

	const handleRejectAll = () => {
		form.setValue('necessary', true); // Necessary remains true
		form.setValue('analytics', false);
		form.setValue('marketing', false);
		form.handleSubmit(onSubmit)();
	};

	const onSubmit = async (values: ConsentTypeValues) => {
		try {
			await setConsent(values);
			setIsVisible(false);
			router.refresh();
		} catch (error) {
			console.error('Failed to set consent', error);
		}
	};

	if (!isVisible) {
		return null;
	}

	return (
		<Layout.Grid className='fixed bottom-0 left-0 right-0 p-4 bg-background text-white z-50 mb-0'>
			<Layout.GridItem>
				<p className='mb-4'>
					We use cookies to enhance your experience. You can accept or reject
					all cookies, or customize your preferences.
				</p>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						{showPreferences ? (
							<>
								<FormField
									control={form.control}
									name='necessary'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Necessary</FormLabel>
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
													disabled
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='analytics'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Analytics</FormLabel>
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='marketing'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Marketing</FormLabel>
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className='flex justify-end space-x-4'>
									<Button type='submit'>Accept Preferences</Button>
								</div>
							</>
						) : (
							<div className='flex justify-end space-x-4'>
								<Button
									type='button'
									variant='destructive'
									onClick={handleRejectAll}
									className='shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 hover:bg-red-500'
								>
									Reject All
								</Button>
								<Button
									type='button'
									variant='default'
									onClick={handleAcceptAll}
									className='bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
								>
									Accept All
								</Button>
								<Button
									type='button'
									variant='default'
									onClick={() => setShowPreferences(true)}
									className='bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
								>
									Preferences
								</Button>
							</div>
						)}
					</form>
				</Form>
			</Layout.GridItem>
		</Layout.Grid>
	);
}
