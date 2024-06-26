import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section from '@/components/ui/custom-section';
import { SERVICES_DATA } from '@/constants/constants';
import {
	Code,
	Activity,
	Link2,
	CheckSquare,
	Layers,
	Wrench,
} from 'lucide-react';

export default function ServicesSection() {
	return (
		<Section>
			<Section.GridContainer className='gap-6 my-12 md:my-24 xl:my-48'>
				<Section.ContentContainer>
					<h2 className='text-2xl/relaxed md:text-5xl/relaxed font-semibold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						What I Offer
					</h2>
				</Section.ContentContainer>
				<Section.ContentContainer className='mx-auto'>
					<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full'>
						{SERVICES_DATA.map(services => (
							<Card
								key={services.id}
								className='flex-1 w-[350px] border-2 border-primary bg-transparent'
							>
								<CardHeader>
									<CardTitle className='text-lg/relaxed text-center text-balance font-semibold text-primary'>
										{services.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid grid-cols-12 justify-center items-center'>
										<div className='col-span-4'>
											{services.icon === 'code' && (
												<Code className='w-10 h-10 text-secondary' />
											)}
											{services.icon === 'activity' && (
												<Activity className='w-10 h-10 text-secondary' />
											)}
											{services.icon === 'link2' && (
												<Link2 className='w-10 h-10 text-secondary' />
											)}
											{services.icon === 'check-square' && (
												<CheckSquare className='w-10 h-10 text-secondary' />
											)}
											{services.icon === 'layers' && (
												<Layers className='w-10 h-10 text-secondary' />
											)}
											{services.icon === 'wrench' && (
												<Wrench className='w-10 h-10 text-secondary' />
											)}
										</div>
										<div className='col-span-8'>{services.description}</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</Section.ContentContainer>
			</Section.GridContainer>
		</Section>
	);
}
