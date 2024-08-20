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
import Block from '@/components/ui/custom-block-structure';

export default function ServiceOfferArea() {
	return (
		<Block>
			<Block.Item>
				<Block.ContentGroup>
					{SERVICES_DATA.map(services => (
						<Block.Content key={services.id} className='min-h-48'>
							<Card className='flex-1 w-full border-2 border-primary bg-transparent'>
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
						</Block.Content>
					))}
				</Block.ContentGroup>
			</Block.Item>
		</Block>
	);
}
