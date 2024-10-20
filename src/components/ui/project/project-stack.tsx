import { Badge } from '../badge';
import { Layout } from '../custom-container-structure';
import ProjectStruct from '../custom-project-structure';
import { Project } from '@prisma/client';

export default function ProjectStack({ project }: { project: Project }) {
	return (
		<div className='my-3 md:my-6 xl:my-12'>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Key Features
				</h4>
				<Layout.Grid as='ul' gap={{ sm: 4, md: 8 }} className='mt-8' noSpacingY>
					{project.features.map((feature, featureIndex) => (
						<Layout.GridItem
							colSpan={{ sm: 12, md: 6 }}
							noSpacingY
							noSpacingX
							as='li'
							key={`${project.id}-${featureIndex}`}
							className='text-white bg-primary p-px text-center rounded-md'
						>
							{feature}
						</Layout.GridItem>
					))}
				</Layout.Grid>
			</ProjectStruct.Stack>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center mt-8'>
					Technologies Used
				</h4>
				<div className='flex flex-wrap gap-4 mt-8'>
					{project.technologies.map(tech => (
						<Badge
							key={tech}
							className='text-sm py-1 px-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold'
						>
							{tech}
						</Badge>
					))}
				</div>
			</ProjectStruct.Stack>
		</div>
	);
}
