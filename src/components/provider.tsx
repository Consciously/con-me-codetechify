'use client';

import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';

const queryClient = new QueryClient();
const convex = new ConvexReactClient(
	process.env.NEXT_PUBLIC_CONVEX_URL ?? 'http://127.0.0.1:3210',
);

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</ConvexProviderWithClerk>
	);
}
