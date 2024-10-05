import Section from '@/components/ui/custom-section-structure';
import ProjectHeaderArea from '@/components/ui/project/project-header-area';
import ProjectDetails from './project-details';

type ProjectDetailPageProps = {
	params: {
		projectId: string;
	};
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const projectId = params.projectId;

	return (
		<Section>
			<Section.Item>
				<ProjectHeaderArea title='My projects' />
			</Section.Item>
			<Section.Item>
				<ProjectDetails projectId={projectId} />
			</Section.Item>
		</Section>
	);
}
