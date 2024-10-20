import { Layout } from '@/components/ui/custom-container-structure';
import H1 from '@/components/ui/h1';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
	return (
		<>
			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container
					size='full'
					noSpacing
					className='fixed inset-0 bg-cover bg-no-repeat w-full -z-20'
					style={{
						backgroundImage: "url('/images/bg_tech_02.webp')",
					}}
				/>
				<Layout.Container noSpacing>
					<div className='fixed inset-0 bg-background opacity-85 -z-10'></div>
				</Layout.Container>
				<Layout.Container isCentered>
					<H1>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
							Sign In
						</span>
					</H1>
					<SignIn />
				</Layout.Container>
			</Layout.Section>
		</>
	);
}
