import ProjectHeaderArea from '@/components/ui/project/project-header-area';
import ProjectDetails from './project-details';
import { Layout } from '@/components/ui/custom-container-structure';

type ProjectDetailPageProps = {
	params: Promise<{
		projectId: string;
	}>;
};

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
    const params = await props.params;
    const projectId = params.projectId;

    return (
		<>
			<Layout.Section className='relative block lg:min-h-screen overflow-clip'>
				<Layout.Container
					size='full'
					noSpacing
					className='fixed inset-0 bg-cover bg-no-repeat w-full -z-20'
					style={{
						backgroundImage: "url('/images/bg_tech_02.webp')",
					}}
				/>
				<Layout.Container noSpacing>
					<div className='fixed inset-0 bg-background opacity-85 -z-10'></div>
				</Layout.Container>
				<Layout.Container isCentered>
					<ProjectHeaderArea title='My projects' />
					<ProjectDetails projectId={projectId} />
				</Layout.Container>
			</Layout.Section>
		</>
	);
}
