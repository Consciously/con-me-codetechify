import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Links from 'next/link';

const additionalImages = [
	{
		src: '/placeholder.svg?height=100&width=150&text=Feature+2',
		alt: 'Feature 2',
	},
	{
		src: '/placeholder.svg?height=100&width=150&text=Feature+3',
		alt: 'Feature 3',
	},
	{
		src: '/placeholder.svg?height=100&width=150&text=Feature+4',
		alt: 'Feature 4',
	},
	{
		src: '/placeholder.svg?height=100&width=150&text=Feature+5',
		alt: 'Feature 5',
	},
];

const project = {
	title: 'Social Media App',
	description:
		'A social media application offering real-time messaging, post sharing, and notification features. This app is designed to connect people and facilitate interactions through a modern and intuitive interface. It supports multimedia sharing, user tagging, and includes a robust notification system to keep users engaged.',
	technologies: [
		'React Native',
		'TypeScript',
		'GraphQL',
		'Firebase',
		'Expo',
		'Redux',
	],
	clientName: 'Socially',
	features: [
		'Real-time Messaging',
		'Post Sharing',
		'Notifications',
		'Multimedia Sharing',
		'User Tagging',
	],
	githubRepo: 'https://github.com/socially/social-media-app',
	liveDemo: 'https://social-media-app.socially.com',
};

export default function ProjectDetailV2ImagesUpdated() {
	return (
		<div className='min-h-screen bg-gray-100'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='lg:grid lg:grid-cols-3 lg:gap-8'>
					<div className='lg:col-span-2'>
						<h1 className='text-4xl font-bold text-gray-900 mb-6'>
							{project.title}
						</h1>
						<p className='text-xl text-gray-600 mb-8'>
							Client: {project.clientName}
						</p>

						<div className='flex flex-col md:flex-row gap-4 mb-8 max-w-2xl'>
							<div className='md:w-2/3'>
								<img
									src='/placeholder.svg?height=400&width=600&text=Main+Feature'
									alt='Main feature'
									className='w-full h-full object-cover rounded-lg'
								/>
							</div>
							<div className='md:w-1/3 flex flex-row md:flex-col gap-4'>
								{additionalImages.map((image, index) => (
									<img
										key={index}
										src={image.src}
										alt={image.alt}
										className='w-full h-24 object-cover rounded-lg'
									/>
								))}
							</div>
						</div>

						<h2 className='text-2xl font-semibold mb-4'>Key Features</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12'>
							{project.features.map(feature => (
								<Card key={feature}>
									<CardContent className='flex flex-col items-center p-4 text-center'>
										<span>{feature}</span>
									</CardContent>
								</Card>
							))}
						</div>

						<h2 className='text-2xl font-semibold mb-4'>Technologies Used</h2>
						<div className='flex flex-wrap gap-2 mb-12'>
							{project.technologies.map(tech => (
								<Badge
									key={tech}
									variant='secondary'
									className='text-sm py-1 px-3 rounded-full bg-blue-100 text-blue-800 border border-blue-300 font-semibold'
								>
									{tech}
								</Badge>
							))}
						</div>
					</div>

					<div className='col-span-1'>
						<div className='relative top-8'>
							<Card>
								<CardHeader>
									<CardTitle>Project Links</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									<Links
										href={project.githubRepo}
										passHref
										className='inline-block w-full text-center bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200'
										target='_blank'
										rel='noopener noreferrer'
									>
										View on GitHub
									</Links>
									<Links
										href={project.liveDemo}
										passHref
										className='inline-block w-full text-center border border-blue-700 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200'
										target='_blank'
										rel='noopener noreferrer'
									>
										Live Demo
									</Links>
								</CardContent>
							</Card>

							<Card className='mt-8'>
								<CardHeader>
									<CardTitle>Project Description</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-gray-700'>{project.description}</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
