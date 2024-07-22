import ProjectsData from './projects-data';
// import Spacer from '@/components/ui/spacer';
import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectHeaderArea from './project-header-area';

export default function ProjectsSection() {
	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			{/* <Spacer> */}
			<ContainerStruct.Layout className='gap-6'>
				<ProjectHeaderArea />
				<ContainerStruct.Content>
					<ProjectsData />
				</ContainerStruct.Content>
			</ContainerStruct.Layout>
			{/* </Spacer> */}
		</ContainerStruct>
	);
}
