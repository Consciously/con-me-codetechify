'use client';

import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';

const queryClient = new QueryClient();

// Ensure Convex URL is configured in production
if (!process.env.NEXT_PUBLIC_CONVEX_URL && process.env.NODE_ENV === 'production') {
	throw new Error('NEXT_PUBLIC_CONVEX_URL must be set in production');
}

// ConvexReactClient is created at module level to ensure a single instance is shared
// across all components. This is the recommended pattern for Convex client initialization.
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
