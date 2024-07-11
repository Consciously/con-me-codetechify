import Section from '@/components/ui/custom-section';
import { SERVICES_DATA } from '@/constants/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Code,
	Activity,
	Link2,
	CheckSquare,
	Layers,
	Wrench,
} from 'lucide-react';

export default function ServiceOfferArea() {
	return (
		<Section.ContentContainer className='mx-auto'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{SERVICES_DATA.map(services => (
					<Card
						key={services.id}
						className='flex-1 w-full border-2 border-primary bg-transparent'
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
	);
}
