import { config } from 'dotenv';
import db from '@/db/drizzle';
import { projectTable, InsertProject } from '@/db/schema';
import { sql } from 'drizzle-orm';

config({ path: '.env' });

const projectData: InsertProject[] = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A comprehensive e-commerce platform with integrated payment systems and product management.',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Prisma'],
		clientName: 'ABC Retail',
		images: [
			'/images/projects/ecommerce-platform-1.webp',
			'/images/projects/ecommerce-platform-2.webp',
		],
		features: [
			'Integrated Payment Gateway',
			'Real-time Data Sync',
			'Product Management',
		],
		githubRepo: 'https://github.com/username/ecommerce-platform',
		liveDemo: 'https://example.com/ecommerce-platform',
		importance: 5,
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
		images: [
			'/images/projects/portfolio-website-1.webp',
			'/images/projects/portfolio-website-2.webp',
		],
		features: ['Responsive Design', 'Dynamic Project Showcase', 'Contact Form'],
		githubRepo: 'https://github.com/username/portfolio-website',
		liveDemo: 'https://example.com/portfolio',
		importance: 4,
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
		images: [
			'/images/projects/blog-platform-1.webp',
			'/images/projects/blog-platform-2.webp',
		],
		features: ['User Authentication', 'Content Management System'],
		githubRepo: 'https://github.com/username/blog-platform',
		liveDemo: 'https://example.com/blog-platform',
		importance: 3,
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
		images: [
			'/images/projects/social-media-app-1.webp',
			'/images/projects/social-media-app-2.webp',
		],
		features: ['Real-time Messaging', 'Post Sharing', 'Notifications'],
		githubRepo: 'https://github.com/username/social-media-app',
		liveDemo: 'https://example.com/social-media-app',
		importance: 3,
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
		images: [
			'/images/projects/project-management-tool-1.webp',
			'/images/projects/project-management-tool-2.webp',
		],
		features: ['Task Tracking', 'Collaboration', 'Reporting'],
		githubRepo: 'https://github.com/username/project-management-tool',
		liveDemo: 'https://example.com/project-management-tool',
		importance: 4,
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
		images: [
			'/images/projects/online-learning-platform-1.webp',
			'/images/projects/online-learning-platform-2.webp',
		],
		features: ['Video Courses', 'Quizzes', 'Certification'],
		githubRepo: 'https://github.com/username/online-learning-platform',
		liveDemo: 'https://example.com/online-learning-platform',
		importance: 3,
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
		images: [
			'/images/projects/fitness-tracker-app-1.webp',
			'/images/projects/fitness-tracker-app-2.webp',
		],
		features: ['Workout Logging', 'Progress Tracking', 'Social Sharing'],
		githubRepo: 'https://github.com/username/fitness-tracker-app',
		liveDemo: 'https://example.com/fitness-tracker-app',
		importance: 2,
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
		images: [
			'/images/projects/event-management-system-1.webp',
			'/images/projects/event-management-system-2.webp',
		],
		features: ['Ticketing', 'Scheduling', 'Attendee Management'],
		githubRepo: 'https://github.com/username/event-management-system',
		liveDemo: 'https://example.com/event-management-system',
		importance: 2,
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
		images: [
			'/images/projects/ecommerce-mobile-app-1.webp',
			'/images/projects/ecommerce-mobile-app-2.webp',
		],
		features: ['Product Browsing', 'Cart', 'Checkout'],
		githubRepo: 'https://github.com/username/ecommerce-mobile-app',
		liveDemo: 'https://example.com/ecommerce-mobile-app',
		importance: 4,
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
		images: [
			'/images/projects/job-board-platform-1.webp',
			'/images/projects/job-board-platform-2.webp',
		],
		features: ['Job Listings', 'Applications', 'Employer Management'],
		githubRepo: 'https://github.com/username/job-board-platform',
		liveDemo: 'https://example.com/job-board-platform',
		importance: 4,
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
		images: [
			'/images/projects/recipe-sharing-app-1.webp',
			'/images/projects/recipe-sharing-app-2.webp',
		],
		features: ['User-generated Content', 'Ratings', 'Comments'],
		githubRepo: 'https://github.com/username/recipe-sharing-app',
		liveDemo: 'https://example.com/recipe-sharing-app',
		importance: 3,
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
		images: [
			'/images/projects/personal-finance-app-1.webp',
			'/images/projects/personal-finance-app-2.webp',
		],
		features: ['Budgeting', 'Expense Tracking', 'Financial Planning'],
		githubRepo: 'https://github.com/username/personal-finance-app',
		liveDemo: 'https://example.com/personal-finance-app',
		importance: 3,
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
		images: [
			'/images/projects/travel-booking-website-1.webp',
			'/images/projects/travel-booking-website-2.webp',
		],
		features: ['Flight Booking', 'Hotel Booking', 'Car Rental'],
		githubRepo: 'https://github.com/username/travel-booking-website',
		liveDemo: 'https://example.com/travel-booking-website',
		importance: 4,
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
		images: [
			'/images/projects/music-streaming-app-1.webp',
			'/images/projects/music-streaming-app-2.webp',
		],
		features: ['Playlists', 'Offline Listening', 'Social Features'],
		githubRepo: 'https://github.com/username/music-streaming-app',
		liveDemo: 'https://example.com/music-streaming-app',
		importance: 4,
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
		images: [
			'/images/projects/health-tracking-app-1.webp',
			'/images/projects/health-tracking-app-2.webp',
		],
		features: ['Activity Logging', 'Diet Tracking', 'Health Metrics'],
		githubRepo: 'https://github.com/username/health-tracking-app',
		liveDemo: 'https://example.com/health-tracking-app',
		importance: 3,
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
		images: [
			'/images/projects/online-marketplace-1.webp',
			'/images/projects/online-marketplace-2.webp',
		],
		features: ['Product Listings', 'Reviews', 'Secure Payments'],
		githubRepo: 'https://github.com/username/online-marketplace',
		liveDemo: 'https://example.com/online-marketplace',
		importance: 3,
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
		images: [
			'/images/projects/educational-game-1.webp',
			'/images/projects/educational-game-2.webp',
		],
		features: ['Interactive Lessons', 'Quizzes', 'Progress Tracking'],
		githubRepo: 'https://github.com/username/educational-game',
		liveDemo: 'https://example.com/educational-game',
		importance: 2,
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
		images: [
			'/images/projects/crm-system-1.webp',
			'/images/projects/crm-system-2.webp',
		],
		features: ['Contact Management', 'Sales Tracking', 'Reporting'],
		githubRepo: 'https://github.com/username/crm-system',
		liveDemo: 'https://example.com/crm-system',
		importance: 3,
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
		images: [
			'/images/projects/photo-editing-app-1.webp',
			'/images/projects/photo-editing-app-2.webp',
		],
		features: ['Filters', 'Effects', 'Social Sharing'],
		githubRepo: 'https://github.com/username/photo-editing-app',
		liveDemo: 'https://example.com/photo-editing-app',
		importance: 2,
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
		images: [
			'/images/projects/news-aggregator-1.webp',
			'/images/projects/news-aggregator-2.webp',
		],
		features: ['Customizable Feeds', 'Notifications', 'Article Saving'],
		githubRepo: 'https://github.com/username/news-aggregator',
		liveDemo: 'https://example.com/news-aggregator',
		importance: 5, // Most important
		createdAt: new Date('2024-10-15'),
		updatedAt: new Date('2024-10-16'),
	},
];

async function main() {
	console.log('Seeding database...');

	// Check if any data exists in the table
	const existingData = await db.select().from(projectTable);

	if (existingData.length > 0) {
		console.log('Data found in the table, truncating...');
		// Truncate the table before inserting new data
		await db.execute(
			sql`TRUNCATE TABLE ${projectTable} RESTART IDENTITY CASCADE`,
		);
		console.log('Table truncated successfully.');
	} else {
		console.log('No data found in the table.');
	}

	// Insert new data
	await db.insert(projectTable).values(projectData);

	console.log('Database seeded successfully.');
}

main().catch(error => {
	console.error('Error seeding database:', error);
	process.exit(1);
});
