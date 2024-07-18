import ProjectStruct from '@/components/ui/project/custom-project-layout';
import { buttonVariants } from '@/components/ui/button';
import { cn, formatDate, separateWords } from '@/lib/utils';
import type { SelectProject } from '@/db/schema';

type ProjectItemPropsType = {
	project: SelectProject;
	layout: {
		size: 'very-big' | 'big' | 'normal';
	};
};

export default function ProjectItem({ project, layout }: ProjectItemPropsType) {
	return (
		<>
			{layout.size === 'very-big' && (
				// project container
				<ProjectStruct.Container>
					{/* project header */}
					<ProjectStruct.Header>
						<ProjectStruct.Title>{project.title}</ProjectStruct.Title>
						<ProjectStruct.Meta>
							<p className='flex gap-3 justify-center items-center'>
								<span className='text-primary'>
									{separateWords(project.clientName)}
								</span>
								<span className='text-secondary'>
									{formatDate(project.createdAt)}
								</span>
							</p>
						</ProjectStruct.Meta>
					</ProjectStruct.Header>
					{/* project content */}
					<ProjectStruct.Content>
						<ProjectStruct.Description>
							{project.description}
						</ProjectStruct.Description>
						<ProjectStruct.Stack>
							<h4 className='text-xl/relaxed md:text-2xl/relaxed font-semibold tracking-tight text-balance text-center'>
								Features
							</h4>
							<ul className='flex gap-6 my-6 flex-wrap'>
								{project.features.map(feature => (
									<li
										key={project.id}
										className='flex-auto text-primary-foreground bg-gradient-to-r from-primary to-secondary p-0.5 md:p-1 text-center'
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
										className='flex-auto text-primary-foreground bg-gradient-to-r from-primary to-secondary p-0.5 md:p-1 text-center'
									>
										{technology}
									</li>
								))}
							</ul>
						</ProjectStruct.Stack>
					</ProjectStruct.Content>
					{/* project footer */}
					<ProjectStruct.Footer>
						<a
							href={project.liveDemo}
							className={cn(
								buttonVariants(),
								'bg-transparent bg-gradient-to-tr from-primary to-secondary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
							)}
						>
							Live Demo
						</a>
						<a
							href={project.githubRepo}
							className={cn(
								buttonVariants(),
								'bg-transparent bg-gradient-to-tr from-secondary to-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60',
							)}
						>
							GitHub Repo
						</a>
					</ProjectStruct.Footer>
				</ProjectStruct.Container>
			)}
			{layout.size === 'big' && (
				<ProjectStruct.Container className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
					<ProjectStruct.Header>
						<ProjectStruct.Title className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
							{project.title}
						</ProjectStruct.Title>
					</ProjectStruct.Header>
					<ProjectStruct.Content>
						<ProjectStruct.Description className='text-lg/relaxed text-primary-foreground'>
							{project.description}
						</ProjectStruct.Description>
						<div>Right side content</div>
					</ProjectStruct.Content>
				</ProjectStruct.Container>
			)}
			{layout.size === 'normal' && (
				<ProjectStruct.Container className='bg-[#1B1918]/25 dark:bg-[#1B1918]/50 border-2 border-primary shadow-sm shadow-zinc-900/60 dark:shadow-zinc-100/60 h-full'>
					<ProjectStruct.Header>
						<ProjectStruct.Title className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-secondary text-xl/relaxed md:text-3xl/relaxed font-semibold tracking-tight text-center'>
							{project.title}
						</ProjectStruct.Title>
					</ProjectStruct.Header>
					<ProjectStruct.Content>
						<ProjectStruct.Description className='text-lg/relaxed text-primary-foreground'>
							{project.description}
						</ProjectStruct.Description>

						<div className='col-span-full'>Right side content</div>
					</ProjectStruct.Content>
				</ProjectStruct.Container>
			)}
		</>
	);
}
