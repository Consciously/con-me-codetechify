import { SelectProject } from '@/db/schema';
import ProjectStruct from './custom-project-layout';

export default function ProjectStack({ project }: { project: SelectProject }) {
	return (
		<>
			<ProjectStruct.Stack>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Features
				</h4>
				<ul className='grid grid-cols-2 gap-3'>
					{project.features.map(feature => (
						<li
							key={project.id}
							className='col-span-full md:col-span-1 text-primary-foreground bg-gradient-to-r from-primary to-secondary p-0.5 md:p-1 text-center'
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
				<ul className='grid grid-cols-2 gap-3'>
					{project.technologies.map(technology => (
						<li
							key={project.id}
							className='col-span-full md:col-span-1 text-primary-foreground bg-gradient-to-r from-secondary to-primary p-0.5 md:p-1 text-center'
						>
							{technology}
						</li>
					))}
				</ul>
			</ProjectStruct.Stack>
		</>
	);
}
