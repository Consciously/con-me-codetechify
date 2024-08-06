import ContainerStruct from '@/components/ui/custom-container-layout';
import H1 from '@/components/ui/h1';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import DropzoneContainer from '../dropzone-container';

export default async function AdminPage() {
	const { isAuthenticated, getPermission } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();
	const hasAdminPermission = await getPermission('access:admin_dashboard');

	if (!isUserAuthenticated) {
		redirect('/api/auth/login');
	}

	if (!hasAdminPermission?.isGranted) {
		redirect('/');
	}

	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			<ContainerStruct.Layout className='gap-6'>
				<ContainerStruct.Content>
					<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Admin Dashboard
					</H1>
				</ContainerStruct.Content>
				<ContainerStruct.Content>
					<DropzoneContainer />
				</ContainerStruct.Content>
			</ContainerStruct.Layout>
		</ContainerStruct>
	);
}
