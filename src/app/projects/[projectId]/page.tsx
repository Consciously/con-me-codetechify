import { Button } from '@/components/ui/button';
import ContainerStruct from '@/components/ui/custom-container-layout';
import ProjectStruct from '@/components/ui/custom-project-structure';
import ProjectDataContainer from '@/components/ui/project/project-data-container';
import ProjectDetails from './project-details';

type ProjectDetailPageProps = {
	params: {
		projectId: string;
	};
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const projectId = params.projectId;

	console.log('ProjectId', projectId);

	return (
		<ContainerStruct className='my-12 md:my-24 xl:my-48'>
			<ContainerStruct.Layout className='gap-6'>
				<ContainerStruct.Content>
					<ProjectDataContainer>
						<ProjectDetails projectId={projectId} />
					</ProjectDataContainer>
				</ContainerStruct.Content>
			</ContainerStruct.Layout>
		</ContainerStruct>
	);
}
