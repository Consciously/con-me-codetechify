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
import { Layout } from '@/components/ui/custom-container-structure';

export default function ServiceOfferArea() {
	return (
		<>
			{SERVICES_DATA.map(services => (
				<Layout.GridItem
					colSpan={{ sm: 1, md: 3, xl: 4 }}
					key={services.id}
					className='flex flex-col justify-center items-center p-1 md:p-2 lg:p-4 min-h-48'
				>
					<Card className='bg-[rgba(217,217,217,0.7)] dark:bg-[rgba(27,25,24,0.7)] backdrop-blur-lg flex-1 w-full border-2 border-primary'>
						<CardHeader>
							<CardTitle className='text-clamp-md leading-relaxed text-center text-balance font-semibold text-primary'>
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
				</Layout.GridItem>
			))}
		</>
	);
}
