import Container from '@/components/ui/custom-container';

export default function ProjectHeaderArea() {
	return (
		<Container.Content>
			<h2 className='text-2xl/relaxed md:text-5xl/relaxed font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
				My featured Projects
			</h2>
		</Container.Content>
	);
}
