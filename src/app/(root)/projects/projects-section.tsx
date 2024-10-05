import ProjectHeaderArea from '@/components/ui/project/project-header-area';
import ProjectData from '@/components/ui/project/project-data';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ProjectsSection() {
	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<ProjectHeaderArea title='My featured Projects' />
			</Layout.Flex>
			<Layout.Grid columns={{ sm: 1, md: 6, xl: 12 }}>
				<ProjectData isHomepage />
			</Layout.Grid>
		</>
	);
}
