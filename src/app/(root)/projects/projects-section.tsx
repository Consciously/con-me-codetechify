import ProjectsData from './projects-home-data';
// import Spacer from '@/components/ui/spacer';
import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectHeaderArea from './project-header-area';
import { UploadButton } from '@/lib/utils';
import UploadImages from '@/components/upload-images';
import ProjectDataContainer from '@/components/ui/project/project-data-container';
import ProjectsHomeData from './projects-home-data';

export default function ProjectsSection() {
	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			{/* <Spacer> */}
			<ContainerStruct.Layout className='gap-6'>
				<ProjectHeaderArea title='My featured Projects' />
				<ContainerStruct.Content>
					<ProjectDataContainer>
						<ProjectsHomeData />
					</ProjectDataContainer>
				</ContainerStruct.Content>
			</ContainerStruct.Layout>
			{/* </Spacer> */}
		</ContainerStruct>
	);
}
