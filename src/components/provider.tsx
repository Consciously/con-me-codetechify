'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type ProviderPropsType = {
	children: React.ReactNode;
};

export default function Provider({ children }: ProviderPropsType) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
