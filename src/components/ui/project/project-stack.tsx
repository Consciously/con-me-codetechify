import ProjectStruct from './custom-project-layout';
import { Project } from '@prisma/client';

export default function ProjectStack({ project }: { project: Project }) {
	return (
		<div className='grid grid-cols-4 gap-6 my-3 md:my-6 xl:my-12'>
			<ProjectStruct.Stack className='col-span-full xl:col-span-2'>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Features
				</h4>
				<ul className='grid grid-cols-2 gap-3 xl:gap-6 mt-3 md:mt-6 xl:mt-12'>
					{project.features.map((feature, featureIndex) => (
						<li
							key={`${project.id}-${featureIndex}`}
							className='flex justify-center items-center col-span-full md:col-span-1 text-primary-foreground bg-gradient-to-r from-primary to-secondary p-px text-center rounded-md'
						>
							{feature}
						</li>
					))}
				</ul>
			</ProjectStruct.Stack>
			<ProjectStruct.Stack className='col-span-full xl:col-span-2'>
				<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
					Technologies
				</h4>
				<ul className='grid grid-cols-2 gap-3 xl:gap-6 mt-3 md:mt-6 xl:mt-12'>
					{project.technologies.map((technology, technologyIndex) => (
						<li
							key={`${project.id}-${technologyIndex}`}
							className='flex justify-center items-center col-span-full md:col-span-1 text-primary-foreground bg-gradient-to-r from-secondary to-primary p-px text-center rounded-md'
						>
							{technology}
						</li>
					))}
				</ul>
			</ProjectStruct.Stack>
		</div>
	);
}
