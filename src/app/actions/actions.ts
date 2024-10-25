'use server';

import { cookies } from 'next/headers';
import { consentSchema } from '@/lib/validation';

export const setConsent = async (data: unknown) => {
	const result = consentSchema.safeParse(data);

	if (!result.success) {
		throw new Error('Invalid consent data');
	}

	const { necessary, analytics, marketing } = result.data;

	const consentCookies = await cookies();

	consentCookies.set('consent_necessary', necessary ? 'true' : 'false', {
		httpOnly: true,
	});

	consentCookies.set('consent_analytics', analytics ? 'true' : 'false', {
		httpOnly: true,
	});

	consentCookies.set('consent_marketing', marketing ? 'true' : 'false', {
		httpOnly: true,
	});

	consentCookies.set('consent_given', 'true', {
		httpOnly: true,
	});

	return { success: true };
};

export const getConsentStatus = async () => {
	const consentCookies = await cookies();
	const consentGiven = consentCookies.get('consent_given');

	return consentGiven?.value === 'true';
};
