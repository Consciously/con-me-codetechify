import ProjectHeaderArea from './project-header-area';
import ProjectsHomeData from './projects-home-data';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ProjectsSection() {
	return (
		<>
			<Layout.Flex direction='column' justify='center' items='center'>
				<ProjectHeaderArea title='My featured Projects' />
			</Layout.Flex>
			<Layout.Grid>
				<ProjectsHomeData />
			</Layout.Grid>
		</>
	);
}
