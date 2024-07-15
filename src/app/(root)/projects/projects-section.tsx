import ProjectsData from './projects-data';
import Spacer from '@/components/ui/spacer';
import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectHeaderArea from './project-header-area';

export default function ProjectsSection() {
	return (
		<ContainerStruct>
			<Spacer>
				<ContainerStruct.Layout className='gap-6'>
					<ProjectHeaderArea />
					<ContainerStruct.Content>
						<ProjectsData />
					</ContainerStruct.Content>
				</ContainerStruct.Layout>
			</Spacer>
		</ContainerStruct>
	);
}
