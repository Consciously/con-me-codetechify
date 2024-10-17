import { Badge } from '../badge';
import ProjectStruct from '../custom-project-structure';
import { Project } from '@prisma/client';

export default function ProjectStack({ project }: { project: Project }) {
	return (
		<div className='my-3 md:my-6 xl:my-12'>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Key Features
				</h4>
				<ul className='grid grid-cols-12 gap-3 xl:gap-6 mt-8'>
					{project.features.map((feature, featureIndex) => (
						<li
							key={`${project.id}-${featureIndex}`}
							className='flex justify-center items-center text-primary-foreground bg-gradient-to-r from-primary to-secondary p-px text-center rounded-md col-span-full @sm:col-span-6'
						>
							{feature}
						</li>
					))}
				</ul>
			</ProjectStruct.Stack>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center mt-8'>
					Technologies Used
				</h4>
				<div className='flex flex-wrap gap-4 mt-8'>
					{project.technologies.map(tech => (
						<Badge
							key={tech}
							className='text-sm py-1 px-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold'
						>
							{tech}
						</Badge>
					))}
				</div>
			</ProjectStruct.Stack>
		</div>
	);
}
