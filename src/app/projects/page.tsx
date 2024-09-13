import ProjectHeaderArea from '@/components/ui/project/project-header-area';
import ProjectsPageData from './project-page-data';
import { Layout } from '@/components/ui/custom-container-structure';

export default function ProjectsPage() {
	return (
		<Layout.Section>
			<Layout.Container isCentered>
				<ProjectHeaderArea title='My projects' />
			</Layout.Container>
			<Layout.Container isCentered>
				<ProjectsPageData />
			</Layout.Container>
		</Layout.Section>
	);
}
