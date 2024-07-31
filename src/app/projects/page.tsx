import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectHeaderArea from '../(root)/projects/project-header-area';
import ProjectDataContainer from '@/components/ui/project/project-data-container';
import ProjectsPageData from './project-page-data';

export default function ProjectsPage() {
	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			<ContainerStruct.Layout className='gap-6'>
				<ProjectHeaderArea title='My projects' />
				<ContainerStruct.Content>
					<ProjectDataContainer>
						<ProjectsPageData />
					</ProjectDataContainer>
				</ContainerStruct.Content>
			</ContainerStruct.Layout>
		</ContainerStruct>
	);
}
