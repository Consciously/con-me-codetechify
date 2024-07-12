import ProjectsData from './projects-data';
import Spacer from '@/components/ui/spacer';
import Container from '@/components/ui/custom-container';
import ProjectHeaderArea from './project-header-area';

export default function ProjectsSection() {
	return (
		<Container>
			<Spacer>
				<Container.Layout className='gap-6'>
					<ProjectHeaderArea />
					<Container.Content>
						<ProjectsData />
					</Container.Content>
				</Container.Layout>
			</Spacer>
		</Container>
	);
}
