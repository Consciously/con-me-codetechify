import { config } from 'dotenv';
import { db } from '@/db/drizzle';
import { projectTable, InsertProject } from '@/db/schema';

config({ path: '.env' });

const projectData: InsertProject[] = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A comprehensive e-commerce platform with integrated payment systems and product management.',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
		clientName: 'ABC Retail',
		image: '/images/projects/ecommerce-platform.webp',
		features: [
			'Integrated Payment Gateway',
			'Real-time Data Sync',
			'Product Management',
		],
		githubRepo: 'https://github.com/username/ecommerce-platform',
		liveDemo: 'https://example.com/ecommerce-platform',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
	},
	{
		id: 2,
		title: 'Portfolio Website',
		description:
			'A personal portfolio website showcasing projects, skills, and contact information.',
		technologies: ['React', 'TypeScript', 'TailwindCSS'],
		clientName: 'Self',
		image: '/images/projects/portfolio-website.webp',
		features: ['Responsive Design', 'Dynamic Project Showcase', 'Contact Form'],
		githubRepo: 'https://github.com/username/portfolio-website',
		liveDemo: 'https://example.com/portfolio',
		createdAt: new Date('2024-01-15'),
		updatedAt: new Date('2024-01-16'),
	},
	{
		id: 3,
		title: 'Blog Platform',
		description:
			'A scalable blog platform with user authentication and content management.',
		technologies: ['Gatsby', 'GraphQL', 'TailwindCSS'],
		clientName: 'Tech Blog Inc.',
		image: '/images/projects/blog-platform.webp',
		features: ['User Authentication', 'Content Management System'],
		githubRepo: 'https://github.com/username/blog-platform',
		liveDemo: 'https://example.com/blog-platform',
		createdAt: new Date('2024-02-01'),
		updatedAt: new Date('2024-02-02'),
	},
	{
		id: 4,
		title: 'Social Media App',
		description:
			'A social media application with real-time messaging and post sharing features.',
		technologies: ['React Native', 'TypeScript', 'GraphQL', 'Firebase'],
		clientName: 'Socially',
		image: '/images/projects/social-media-app.webp',
		features: ['Real-time Messaging', 'Post Sharing', 'Notifications'],
		githubRepo: 'https://github.com/username/social-media-app',
		liveDemo: 'https://example.com/social-media-app',
		createdAt: new Date('2024-02-15'),
		updatedAt: new Date('2024-02-16'),
	},
	{
		id: 5,
		title: 'Project Management Tool',
		description:
			'A project management tool with task tracking, collaboration, and reporting features.',
		technologies: ['Vue.js', 'TypeScript', 'Vuetify', 'Node.js'],
		clientName: 'ManageIt',
		image: '/images/projects/project-management-tool.webp',
		features: ['Task Tracking', 'Collaboration', 'Reporting'],
		githubRepo: 'https://github.com/username/project-management-tool',
		liveDemo: 'https://example.com/project-management-tool',
		createdAt: new Date('2024-03-01'),
		updatedAt: new Date('2024-03-02'),
	},
	{
		id: 6,
		title: 'Online Learning Platform',
		description:
			'An online learning platform with video courses, quizzes, and certification.',
		technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Hasura'],
		clientName: 'LearnOnline',
		image: '/images/projects/online-learning-platform.webp',
		features: ['Video Courses', 'Quizzes', 'Certification'],
		githubRepo: 'https://github.com/username/online-learning-platform',
		liveDemo: 'https://example.com/online-learning-platform',
		createdAt: new Date('2024-03-15'),
		updatedAt: new Date('2024-03-16'),
	},
	{
		id: 7,
		title: 'Fitness Tracker App',
		description:
			'A fitness tracker app with workout logging, progress tracking, and social sharing.',
		technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
		clientName: 'FitLife',
		image: '/images/projects/fitness-tracker-app.webp',
		features: ['Workout Logging', 'Progress Tracking', 'Social Sharing'],
		githubRepo: 'https://github.com/username/fitness-tracker-app',
		liveDemo: 'https://example.com/fitness-tracker-app',
		createdAt: new Date('2024-04-01'),
		updatedAt: new Date('2024-04-02'),
	},
	{
		id: 8,
		title: 'Event Management System',
		description:
			'An event management system with ticketing, scheduling, and attendee management.',
		technologies: ['Angular', 'TypeScript', 'Material Design', 'Node.js'],
		clientName: 'EventMaster',
		image: '/images/projects/event-management-system.webp',
		features: ['Ticketing', 'Scheduling', 'Attendee Management'],
		githubRepo: 'https://github.com/username/event-management-system',
		liveDemo: 'https://example.com/event-management-system',
		createdAt: new Date('2024-04-15'),
		updatedAt: new Date('2024-04-16'),
	},
	{
		id: 9,
		title: 'E-commerce Mobile App',
		description:
			'A mobile e-commerce app with product browsing, cart, and checkout features.',
		technologies: ['React Native', 'TypeScript', 'GraphQL', 'Stripe'],
		clientName: 'ShopEasy',
		image: '/images/projects/ecommerce-mobile-app.webp',
		features: ['Product Browsing', 'Cart', 'Checkout'],
		githubRepo: 'https://github.com/username/ecommerce-mobile-app',
		liveDemo: 'https://example.com/ecommerce-mobile-app',
		createdAt: new Date('2024-05-01'),
		updatedAt: new Date('2024-05-02'),
	},
	{
		id: 10,
		title: 'Job Board Platform',
		description:
			'A job board platform with job listings, applications, and employer management.',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
		clientName: 'JobFinder',
		image: '/images/projects/job-board-platform.webp',
		features: ['Job Listings', 'Applications', 'Employer Management'],
		githubRepo: 'https://github.com/username/job-board-platform',
		liveDemo: 'https://example.com/job-board-platform',
		createdAt: new Date('2024-05-15'),
		updatedAt: new Date('2024-05-16'),
	},
	{
		id: 11,
		title: 'Recipe Sharing App',
		description:
			'A recipe sharing app with user-generated content, ratings, and comments.',
		technologies: ['Vue.js', 'TypeScript', 'GraphQL', 'Apollo'],
		clientName: 'CookTogether',
		image: '/images/projects/recipe-sharing-app.webp',
		features: ['User-generated Content', 'Ratings', 'Comments'],
		githubRepo: 'https://github.com/username/recipe-sharing-app',
		liveDemo: 'https://example.com/recipe-sharing-app',
		createdAt: new Date('2024-06-01'),
		updatedAt: new Date('2024-06-02'),
	},
	{
		id: 12,
		title: 'Personal Finance App',
		description:
			'A personal finance app with budgeting, expense tracking, and financial planning features.',
		technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
		clientName: 'FinancePro',
		image: '/images/projects/personal-finance-app.webp',
		features: ['Budgeting', 'Expense Tracking', 'Financial Planning'],
		githubRepo: 'https://github.com/username/personal-finance-app',
		liveDemo: 'https://example.com/personal-finance-app',
		createdAt: new Date('2024-06-15'),
		updatedAt: new Date('2024-06-16'),
	},
	{
		id: 13,
		title: 'Travel Booking Website',
		description:
			'A travel booking website with flight, hotel, and car rental bookings.',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
		clientName: 'TravelEasy',
		image: '/images/projects/travel-booking-website.webp',
		features: ['Flight Booking', 'Hotel Booking', 'Car Rental'],
		githubRepo: 'https://github.com/username/travel-booking-website',
		liveDemo: 'https://example.com/travel-booking-website',
		createdAt: new Date('2024-07-01'),
		updatedAt: new Date('2024-07-02'),
	},
	{
		id: 14,
		title: 'Music Streaming App',
		description:
			'A music streaming app with playlists, offline listening, and social features.',
		technologies: ['React Native', 'TypeScript', 'GraphQL', 'Apollo'],
		clientName: 'StreamMusic',
		image: '/images/projects/music-streaming-app.webp',
		features: ['Playlists', 'Offline Listening', 'Social Features'],
		githubRepo: 'https://github.com/username/music-streaming-app',
		liveDemo: 'https://example.com/music-streaming-app',
		createdAt: new Date('2024-07-15'),
		updatedAt: new Date('2024-07-16'),
	},
	{
		id: 15,
		title: 'Health Tracking App',
		description:
			'A health tracking app with daily activity logging, diet tracking, and health metrics.',
		technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
		clientName: 'HealthTrack',
		image: '/images/projects/health-tracking-app.webp',
		features: ['Activity Logging', 'Diet Tracking', 'Health Metrics'],
		githubRepo: 'https://github.com/username/health-tracking-app',
		liveDemo: 'https://example.com/health-tracking-app',
		createdAt: new Date('2024-08-01'),
		updatedAt: new Date('2024-08-02'),
	},
	{
		id: 16,
		title: 'Online Marketplace',
		description:
			'An online marketplace with product listings, reviews, and secure payments.',
		technologies: ['Vue.js', 'TypeScript', 'GraphQL', 'Stripe'],
		clientName: 'MarketPlace',
		image: '/images/projects/online-marketplace.webp',
		features: ['Product Listings', 'Reviews', 'Secure Payments'],
		githubRepo: 'https://github.com/username/online-marketplace',
		liveDemo: 'https://example.com/online-marketplace',
		createdAt: new Date('2024-08-15'),
		updatedAt: new Date('2024-08-16'),
	},
	{
		id: 17,
		title: 'Educational Game',
		description:
			'An educational game with interactive lessons, quizzes, and progress tracking.',
		technologies: ['React', 'TypeScript', 'GraphQL', 'Hasura'],
		clientName: 'EduGame',
		image: '/images/projects/educational-game.webp',
		features: ['Interactive Lessons', 'Quizzes', 'Progress Tracking'],
		githubRepo: 'https://github.com/username/educational-game',
		liveDemo: 'https://example.com/educational-game',
		createdAt: new Date('2024-09-01'),
		updatedAt: new Date('2024-09-02'),
	},
	{
		id: 18,
		title: 'CRM System',
		description:
			'A customer relationship management system with contact management, sales tracking, and reporting.',
		technologies: ['Angular', 'TypeScript', 'Material Design', 'Node.js'],
		clientName: 'CRMPro',
		image: '/images/projects/crm-system.webp',
		features: ['Contact Management', 'Sales Tracking', 'Reporting'],
		githubRepo: 'https://github.com/username/crm-system',
		liveDemo: 'https://example.com/crm-system',
		createdAt: new Date('2024-09-15'),
		updatedAt: new Date('2024-09-16'),
	},
	{
		id: 19,
		title: 'Photo Editing App',
		description:
			'A photo editing app with filters, effects, and social sharing.',
		technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
		clientName: 'PhotoEdit',
		image: '/images/projects/photo-editing-app.webp',
		features: ['Filters', 'Effects', 'Social Sharing'],
		githubRepo: 'https://github.com/username/photo-editing-app',
		liveDemo: 'https://example.com/photo-editing-app',
		createdAt: new Date('2024-10-01'),
		updatedAt: new Date('2024-10-02'),
	},
	{
		id: 20,
		title: 'News Aggregator',
		description:
			'A news aggregator with customizable feeds, notifications, and article saving.',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL'],
		clientName: 'NewsNow',
		image: '/images/projects/news-aggregator.webp',
		features: ['Customizable Feeds', 'Notifications', 'Article Saving'],
		githubRepo: 'https://github.com/username/news-aggregator',
		liveDemo: 'https://example.com/news-aggregator',
		createdAt: new Date('2024-10-15'),
		updatedAt: new Date('2024-10-16'),
	},
];

async function main() {
	console.log('Seeding database...');

	await db.insert(projectTable).values(projectData);

	console.log('Database seeded successfully.');
}

main().catch(error => {
	console.error('Error seeding database:', error);
	process.exit(1);
});
