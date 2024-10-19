import ProjectHeaderArea from '@/components/ui/project/project-header-area';
import ProjectData from '@/components/ui/project/project-data';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ProjectsPage() {
	return (
		<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
			<Layout.Container
				size='full'
				noSpacing
				className='fixed inset-0 bg-cover bg-no-repeat w-full -z-20'
				style={{
					backgroundImage: "url('/images/bg_tech_03.webp')",
				}}
			/>
			<Layout.Container noSpacing>
				<div className='fixed inset-0 bg-background opacity-85 -z-10'></div>
			</Layout.Container>
			<Layout.Container isCentered>
				<Layout.Flex direction='column' justify='center' items='center'>
					<ProjectHeaderArea title='My Projects' />
				</Layout.Flex>
				<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }}>
					<ProjectData />
				</Layout.Grid>
			</Layout.Container>
		</Layout.Section>
	);
}
