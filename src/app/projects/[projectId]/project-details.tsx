'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

export default function ProjectDetails({ projectId }: { projectId: string }) {
	const router = useRouter();
	const { isAuthenticated } = useKindeBrowserClient();

	return (
		<>
			{isAuthenticated && (
				<Button
					className='w-full bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60'
					onClick={() => router.push(`/admin/${projectId}`)}
				>
					Redirect...
				</Button>
			)}
		</>
	);
}
