import ContainerStruct from '@/components/ui/custom-container-layout';
import H1 from '@/components/ui/h1';
import DropzoneUploader from '@/app/admin/dropzone-uploader';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

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
					<DropzoneUploader />
				</ContainerStruct.Content>
			</ContainerStruct.Layout>
		</ContainerStruct>
	);
}
