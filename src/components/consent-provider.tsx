import ConsentBanner from './consent-banner';
import { getConsentStatus } from '@/app/actions/actions';

export default async function ConsentProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const consentGiven = await getConsentStatus();

	return (
		<>
			{!consentGiven && <ConsentBanner />}
			{children}
		</>
	);
}
