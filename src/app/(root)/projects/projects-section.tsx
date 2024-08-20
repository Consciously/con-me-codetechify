import ProjectsData from './projects-home-data';
// import Spacer from '@/components/ui/spacer';
import ProjectHeaderArea from './project-header-area';
import ProjectDataContainer from '@/components/ui/project/project-data-container';
import ProjectsHomeData from './projects-home-data';
import Section from '@/components/ui/custom-section-structure';

export default function ProjectsSection() {
	return (
		<>
			<Section.Item>
				<ProjectHeaderArea title='My featured Projects' />
			</Section.Item>
			<Section.Item>
				<ProjectsHomeData />
			</Section.Item>
		</>
	);
}
