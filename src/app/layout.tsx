import type { Metadata } from 'next';
import { Inter, Albert_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from 'next-themes';
import Provider from '@/components/provider';
import { Toaster } from '@/components/ui/toaster';
import ConsentProvider from '@/components/consent-provider';
import { ClerkProvider } from '@clerk/nextjs';

const albertSans = Albert_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={albertSans.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Provider>
						<ConsentProvider>
							<ClerkProvider>
								<Header />
								<main className='flex flex-col min-h-[calc(100vh-5rem-1px)]'>
									<div className='flex-1 flex flex-col h-full'>{children}</div>
								</main>
								<Toaster />
								<Footer />
							</ClerkProvider>
						</ConsentProvider>
					</Provider>
				</ThemeProvider>
			</body>
		</html>
	);
}
