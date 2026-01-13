'use client';

import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';
import { useMemo } from 'react';

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {
	// Lazily create ConvexReactClient to avoid potential SSR issues
	const convex = useMemo(
		() =>
			new ConvexReactClient(
				process.env.NEXT_PUBLIC_CONVEX_URL ?? 'http://127.0.0.1:3210',
			),
		[],
	);

	return (
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</ConvexProviderWithClerk>
	);
}
