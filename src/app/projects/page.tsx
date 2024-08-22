import ProjectHeaderArea from '../(root)/projects/project-header-area';
import ProjectsPageData from './project-page-data';
import Section from '@/components/ui/custom-section-structure';

export default function ProjectsPage() {
	return (
		<Section>
			<Section.Item>
				<ProjectHeaderArea title='My projects' />
			</Section.Item>
			<Section.Item>
				<ProjectsPageData />
			</Section.Item>
		</Section>
	);
}
