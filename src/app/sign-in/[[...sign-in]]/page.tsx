import Section from '@/components/ui/custom-section-structure';
import H1 from '@/components/ui/h1';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
	return (
		<Section isCentered>
			<Section.Item>
				<H1>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Sign In
					</span>
				</H1>
			</Section.Item>
			<Section.Item className='place-self-center'>
				<SignIn />
			</Section.Item>
		</Section>
	);
}
