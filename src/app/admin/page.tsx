import ContainerStruct from '@/components/ui/custom-container-layout';
import H1 from '@/components/ui/h1';

export default function AdminPage() {
	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			<ContainerStruct.Layout className='gap-6'>
				<ContainerStruct.Content>
					<H1 className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						Admin Dashboard
					</H1>
				</ContainerStruct.Content>
				<ContainerStruct.Content>Admin Page</ContainerStruct.Content>
			</ContainerStruct.Layout>
		</ContainerStruct>
	);
}
