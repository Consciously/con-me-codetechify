'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { type ConsentFormValues, consentSchema } from '@/lib/validation';

export default function ConsentBanner() {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const [showPreferences, setShowPreferences] = useState<boolean>(false);

	useEffect(() => {
		const checkConsentStatus = async () => {
			const consentGiven = await getConsentStatus();
			if (consentGiven) {
				setIsVisible(false);
			}

			checkConsentStatus();
		};
	}, []);

	const form = useForm<ConsentFormValues>({
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

	const onSubmit = async (values: ConsentFormValues) => {
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
		<div className='fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white z-50'>
			<p className='mb-4'>
				We use cookies to enhance your experience. You can accept or reject all
				cookies, or customize your preferences.
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
							<Button type='button' variant='outline' onClick={handleRejectAll}>
								Reject All
							</Button>
							<Button type='button' variant='outline' onClick={handleAcceptAll}>
								Accept All
							</Button>
							<Button type='button' onClick={() => setShowPreferences(true)}>
								Preferences
							</Button>
						</div>
					)}
				</form>
			</Form>
		</div>
	);
}
