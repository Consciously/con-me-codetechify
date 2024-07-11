import Section from '@/components/ui/custom-section';
import ProjectsData from './projects-data';

export default function ProjectsSection() {
	return (
		<Section>
			<Section.GridContainer className='gap-6 my-12 md:my-24 xl:my-48'>
				<Section.ContentContainer>
					<h2 className='text-2xl/relaxed md:text-5xl/relaxed font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						My featured Projects
					</h2>
				</Section.ContentContainer>
				<Section.ContentContainer>
					<ProjectsData />
				</Section.ContentContainer>
			</Section.GridContainer>
		</Section>
	);
}
