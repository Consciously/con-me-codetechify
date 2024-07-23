import { SelectProject } from '@/db/schema';
import ProjectStruct from './custom-project-layout';

export default function ProjectStack({ project }: { project: SelectProject }) {
	return (
		<>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Features
				</h4>
				<ul className='flex gap-6 my-6 flex-wrap'>
					{project.features.map(feature => (
						<li
							key={project.id}
							className='text-primary-foreground bg-gradient-to-r from-primary to-secondary p-0.5 md:p-1 text-center flex-auto'
						>
							{feature}
						</li>
					))}
				</ul>
			</ProjectStruct.Stack>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Technologies
				</h4>
				<ul className='flex gap-6 my-6 flex-wrap'>
					{project.technologies.map(technology => (
						<li
							key={project.id}
							className='text-primary-foreground bg-gradient-to-r from-secondary to-primary p-0.5 md:p-1 text-center flex-auto '
						>
							{technology}
						</li>
					))}
				</ul>
			</ProjectStruct.Stack>
		</>
	);
}
