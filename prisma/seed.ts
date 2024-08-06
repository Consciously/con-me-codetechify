import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projectData = [
	{
		title: 'E-commerce Platform',
		description:
			'A comprehensive e-commerce platform designed to offer seamless shopping experiences. This platform integrates advanced payment systems, product management tools, and real-time data synchronization. With a user-friendly interface and robust backend, it supports various business models, including B2B and B2C. The platform ensures secure transactions and provides insightful analytics for business growth.',
		technologies: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'Prisma',
			'Node.js',
			'Stripe',
		],
		clientName: 'ABC Retail',
		images: [],
		features: [
			'Integrated Payment Gateway',
			'Real-time Data Sync',
			'Product Management',
			'User Analytics',
			'Customer Support Integration',
		],
		githubRepo: 'https://github.com/username/ecommerce-platform',
		liveDemo: 'https://example.com/ecommerce-platform',
		importance: 5,
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-02'),
	},
	{
		title: 'Portfolio Website',
		description:
			'A personal portfolio website showcasing a wide range of projects, skills, and contact information. This website highlights professional achievements and provides an easy-to-navigate interface for potential clients. The portfolio is designed to be fully responsive and features dynamic content updates to keep the information current.',
		technologies: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'Framer Motion',
			'Next.js',
		],
		clientName: 'Self',
		images: [],
		features: [
			'Responsive Design',
			'Dynamic Project Showcase',
			'Contact Form',
			'SEO Optimization',
		],
		githubRepo: 'https://github.com/username/portfolio-website',
		liveDemo: 'https://example.com/portfolio',
		importance: 4,
		createdAt: new Date('2024-01-15'),
		updatedAt: new Date('2024-01-16'),
	},
	{
		title: 'Blog Platform',
		description:
			'A scalable blog platform that includes user authentication, content management, and a customizable interface. This platform allows users to create, edit, and manage their blog posts efficiently. It also features advanced SEO tools and social media integration to boost content reach and engagement.',
		technologies: [
			'Gatsby',
			'GraphQL',
			'TailwindCSS',
			'Contentful',
			'React',
			'Node.js',
		],
		clientName: 'Tech Blog Inc.',
		images: [],
		features: [
			'User Authentication',
			'Content Management System',
			'SEO Tools',
			'Social Media Integration',
		],
		githubRepo: 'https://github.com/username/blog-platform',
		liveDemo: 'https://example.com/blog-platform',
		importance: 3,
		createdAt: new Date('2024-02-01'),
		updatedAt: new Date('2024-02-02'),
	},
	{
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
		images: [],
		features: [
			'Real-time Messaging',
			'Post Sharing',
			'Notifications',
			'Multimedia Sharing',
			'User Tagging',
		],
		githubRepo: 'https://github.com/username/social-media-app',
		liveDemo: 'https://example.com/social-media-app',
		importance: 3,
		createdAt: new Date('2024-02-15'),
		updatedAt: new Date('2024-02-16'),
	},
	{
		title: 'Project Management Tool',
		description:
			'A project management tool that facilitates task tracking, team collaboration, and detailed reporting. This tool is designed to enhance productivity by providing a comprehensive overview of project progress. It includes features such as Gantt charts, time tracking, and project templates.',
		technologies: [
			'Vue.js',
			'TypeScript',
			'Vuetify',
			'Node.js',
			'Express',
			'MongoDB',
		],
		clientName: 'ManageIt',
		images: [],
		features: [
			'Task Tracking',
			'Collaboration',
			'Reporting',
			'Gantt Charts',
			'Time Tracking',
		],
		githubRepo: 'https://github.com/username/project-management-tool',
		liveDemo: 'https://example.com/project-management-tool',
		importance: 4,
		createdAt: new Date('2024-03-01'),
		updatedAt: new Date('2024-03-02'),
	},
	{
		title: 'Online Learning Platform',
		description:
			'An online learning platform featuring video courses, interactive quizzes, and certification. This platform is designed to offer a comprehensive learning experience with a variety of educational content. It supports multiple learning paths, progress tracking, and personalized recommendations.',
		technologies: [
			'Next.js',
			'TypeScript',
			'GraphQL',
			'Hasura',
			'PostgreSQL',
			'React',
		],
		clientName: 'LearnOnline',
		images: [],
		features: [
			'Video Courses',
			'Quizzes',
			'Certification',
			'Progress Tracking',
			'Personalized Recommendations',
		],
		githubRepo: 'https://github.com/username/online-learning-platform',
		liveDemo: 'https://example.com/online-learning-platform',
		importance: 3,
		createdAt: new Date('2024-03-15'),
		updatedAt: new Date('2024-03-16'),
	},
	{
		title: 'Fitness Tracker App',
		description:
			'A fitness tracker app designed to log workouts, track progress, and share achievements socially. This app helps users stay motivated by providing detailed analytics of their fitness journey. It includes features such as goal setting, workout plans, and a community forum for support.',
		technologies: [
			'React Native',
			'TypeScript',
			'Redux',
			'Firebase',
			'GraphQL',
			'Expo',
		],
		clientName: 'FitLife',
		images: [],
		features: [
			'Workout Logging',
			'Progress Tracking',
			'Social Sharing',
			'Goal Setting',
			'Workout Plans',
		],
		githubRepo: 'https://github.com/username/fitness-tracker-app',
		liveDemo: 'https://example.com/fitness-tracker-app',
		importance: 2,
		createdAt: new Date('2024-04-01'),
		updatedAt: new Date('2024-04-02'),
	},
	{
		title: 'Event Management System',
		description:
			'An event management system that handles ticketing, scheduling, and attendee management. This system simplifies the organization of events by providing an all-in-one platform for event planning. It includes features such as attendee tracking, event analytics, and email notifications.',
		technologies: [
			'Angular',
			'TypeScript',
			'Material Design',
			'Node.js',
			'Express',
			'MongoDB',
		],
		clientName: 'EventMaster',
		images: [],
		features: [
			'Ticketing',
			'Scheduling',
			'Attendee Management',
			'Event Analytics',
			'Email Notifications',
		],
		githubRepo: 'https://github.com/username/event-management-system',
		liveDemo: 'https://example.com/event-management-system',
		importance: 2,
		createdAt: new Date('2024-04-15'),
		updatedAt: new Date('2024-04-16'),
	},
	{
		title: 'E-commerce Mobile App',
		description:
			'A mobile e-commerce app providing seamless shopping experiences with product browsing, cart management, and secure checkout. This app is designed for both Android and iOS platforms, ensuring a wide reach and user engagement. It features push notifications, wish lists, and user reviews.',
		technologies: [
			'React Native',
			'TypeScript',
			'GraphQL',
			'Stripe',
			'Expo',
			'Redux',
		],
		clientName: 'ShopEasy',
		images: [],
		features: [
			'Product Browsing',
			'Cart Management',
			'Checkout',
			'Push Notifications',
			'Wish Lists',
		],
		githubRepo: 'https://github.com/username/ecommerce-mobile-app',
		liveDemo: 'https://example.com/ecommerce-mobile-app',
		importance: 4,
		createdAt: new Date('2024-05-01'),
		updatedAt: new Date('2024-05-02'),
	},
	{
		title: 'Job Board Platform',
		description:
			'A job board platform featuring job listings, application tracking, and employer management tools. This platform connects job seekers with employers through a user-friendly interface. It includes advanced search filters, resume builders, and company profiles to streamline the hiring process.',
		technologies: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'Prisma',
			'Node.js',
			'GraphQL',
		],
		clientName: 'JobFinder',
		images: [],
		features: [
			'Job Listings',
			'Applications',
			'Employer Management',
			'Advanced Search Filters',
			'Resume Builder',
		],
		githubRepo: 'https://github.com/username/job-board-platform',
		liveDemo: 'https://example.com/job-board-platform',
		importance: 4,
		createdAt: new Date('2024-05-15'),
		updatedAt: new Date('2024-05-16'),
	},
	{
		title: 'Recipe Sharing App',
		description:
			'A recipe sharing app that enables users to share, rate, and comment on recipes. This app provides a platform for food enthusiasts to discover and share their favorite recipes. It features advanced search options, ingredient lists, and step-by-step cooking instructions.',
		technologies: [
			'Vue.js',
			'TypeScript',
			'GraphQL',
			'Apollo',
			'Firebase',
			'Node.js',
		],
		clientName: 'CookTogether',
		images: [],
		features: [
			'User-generated Content',
			'Ratings',
			'Comments',
			'Advanced Search',
			'Ingredient Lists',
		],
		githubRepo: 'https://github.com/username/recipe-sharing-app',
		liveDemo: 'https://example.com/recipe-sharing-app',
		importance: 3,
		createdAt: new Date('2024-06-01'),
		updatedAt: new Date('2024-06-02'),
	},
	{
		title: 'Personal Finance App',
		description:
			'A personal finance app designed to help users manage their budget, track expenses, and plan their financial future. This app includes features such as expense categorization, financial goal setting, and automated transaction imports.',
		technologies: [
			'React Native',
			'TypeScript',
			'Redux',
			'Firebase',
			'GraphQL',
			'Node.js',
		],
		clientName: 'FinancePro',
		images: [],
		features: [
			'Budgeting',
			'Expense Tracking',
			'Financial Planning',
			'Goal Setting',
			'Automated Transaction Imports',
		],
		githubRepo: 'https://github.com/username/personal-finance-app',
		liveDemo: 'https://example.com/personal-finance-app',
		importance: 3,
		createdAt: new Date('2024-06-15'),
		updatedAt: new Date('2024-06-16'),
	},
	{
		title: 'Travel Booking Website',
		description:
			'A travel booking website offering comprehensive booking options for flights, hotels, and car rentals. This platform provides an easy-to-use interface for planning trips and includes features such as personalized travel recommendations and booking history management.',
		technologies: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'Prisma',
			'Node.js',
			'Stripe',
		],
		clientName: 'TravelEasy',
		images: [],
		features: [
			'Flight Booking',
			'Hotel Booking',
			'Car Rental',
			'Personalized Recommendations',
			'Booking History',
		],
		githubRepo: 'https://github.com/username/travel-booking-website',
		liveDemo: 'https://example.com/travel-booking-website',
		importance: 4,
		createdAt: new Date('2024-07-01'),
		updatedAt: new Date('2024-07-02'),
	},
	{
		title: 'Music Streaming App',
		description:
			'A music streaming app that allows users to create playlists, listen offline, and engage with social features. This app offers high-quality audio streaming and personalized music recommendations. It includes features such as collaborative playlists, artist profiles, and user comments.',
		technologies: [
			'React Native',
			'TypeScript',
			'GraphQL',
			'Apollo',
			'Expo',
			'Redux',
		],
		clientName: 'StreamMusic',
		images: [],
		features: [
			'Playlists',
			'Offline Listening',
			'Social Features',
			'Collaborative Playlists',
			'Artist Profiles',
		],
		githubRepo: 'https://github.com/username/music-streaming-app',
		liveDemo: 'https://example.com/music-streaming-app',
		importance: 4,
		createdAt: new Date('2024-07-15'),
		updatedAt: new Date('2024-07-16'),
	},
	{
		title: 'Health Tracking App',
		description:
			"A health tracking app designed to log daily activities, track diet, and monitor health metrics. This app provides detailed analytics and insights into the user's health journey. It includes features such as calorie counting, workout logging, and health goal setting.",
		technologies: [
			'React Native',
			'TypeScript',
			'Redux',
			'Firebase',
			'GraphQL',
			'Node.js',
		],
		clientName: 'HealthTrack',
		images: [],
		features: [
			'Activity Logging',
			'Diet Tracking',
			'Health Metrics',
			'Calorie Counting',
			'Workout Logging',
		],
		githubRepo: 'https://github.com/username/health-tracking-app',
		liveDemo: 'https://example.com/health-tracking-app',
		importance: 3,
		createdAt: new Date('2024-08-01'),
		updatedAt: new Date('2024-08-02'),
	},
	{
		title: 'Online Marketplace',
		description:
			'An online marketplace offering product listings, user reviews, and secure payment options. This platform connects buyers and sellers in a user-friendly environment. It includes features such as advanced search filters, shopping carts, and order tracking.',
		technologies: [
			'Vue.js',
			'TypeScript',
			'GraphQL',
			'Stripe',
			'Node.js',
			'Express',
		],
		clientName: 'MarketPlace',
		images: [],
		features: [
			'Product Listings',
			'Reviews',
			'Secure Payments',
			'Advanced Search Filters',
			'Order Tracking',
		],
		githubRepo: 'https://github.com/username/online-marketplace',
		liveDemo: 'https://example.com/online-marketplace',
		importance: 3,
		createdAt: new Date('2024-08-15'),
		updatedAt: new Date('2024-08-16'),
	},
	{
		title: 'Educational Game',
		description:
			'An educational game that combines interactive lessons, quizzes, and progress tracking to provide an engaging learning experience. This game supports various subjects and is designed to make learning fun and effective for students of all ages.',
		technologies: [
			'React',
			'TypeScript',
			'GraphQL',
			'Hasura',
			'Node.js',
			'Firebase',
		],
		clientName: 'EduGame',
		images: [],
		features: [
			'Interactive Lessons',
			'Quizzes',
			'Progress Tracking',
			'Multisubject Support',
			'Engaging Content',
		],
		githubRepo: 'https://github.com/username/educational-game',
		liveDemo: 'https://example.com/educational-game',
		importance: 2,
		createdAt: new Date('2024-09-01'),
		updatedAt: new Date('2024-09-02'),
	},
	{
		title: 'CRM System',
		description:
			'A customer relationship management system designed to help businesses manage their interactions with current and potential customers. This system includes features such as contact management, sales tracking, and detailed reporting.',
		technologies: [
			'Angular',
			'TypeScript',
			'Material Design',
			'Node.js',
			'Express',
			'MongoDB',
		],
		clientName: 'CRMPro',
		images: [],
		features: [
			'Contact Management',
			'Sales Tracking',
			'Reporting',
			'Customer Interaction History',
			'Task Management',
		],
		githubRepo: 'https://github.com/username/crm-system',
		liveDemo: 'https://example.com/crm-system',
		importance: 3,
		createdAt: new Date('2024-09-15'),
		updatedAt: new Date('2024-09-16'),
	},
	{
		title: 'Photo Editing App',
		description:
			'A photo editing app that provides users with a variety of tools to enhance and share their photos. This app includes features such as filters, effects, and social sharing options to help users create stunning visuals.',
		technologies: [
			'React Native',
			'TypeScript',
			'Redux',
			'Firebase',
			'GraphQL',
			'Expo',
		],
		clientName: 'PhotoEdit',
		images: [],
		features: [
			'Filters',
			'Effects',
			'Social Sharing',
			'Image Adjustment',
			'Photo Collage',
		],
		githubRepo: 'https://github.com/username/photo-editing-app',
		liveDemo: 'https://example.com/photo-editing-app',
		importance: 2,
		createdAt: new Date('2024-10-01'),
		updatedAt: new Date('2024-10-02'),
	},
	{
		title: 'News Aggregator',
		description:
			'A news aggregator that compiles news articles from various sources into one place. This platform allows users to customize their feeds, receive notifications for breaking news, and save articles for later reading.',
		technologies: [
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'GraphQL',
			'Node.js',
			'Apollo',
		],
		clientName: 'NewsNow',
		images: [],
		features: [
			'Customizable Feeds',
			'Notifications',
			'Article Saving',
			'Breaking News Alerts',
			'Source Filtering',
		],
		githubRepo: 'https://github.com/username/news-aggregator',
		liveDemo: 'https://example.com/news-aggregator',
		importance: 5,
		createdAt: new Date('2024-10-15'),
		updatedAt: new Date('2024-10-16'),
	},
];

async function main() {
	console.log('Seeding database...');

	// Check if any data exists in the table
	const existingData = await prisma.project.findMany();

	if (existingData.length > 0) {
		console.log('Data found in the table, deleting...');
		// Delete the existing data
		await prisma.project.deleteMany();
		console.log('Existing data deleted successfully.');
	} else {
		console.log('No data found in the table.');
	}

	// Insert new data
	for (const project of projectData) {
		await prisma.project.create({ data: project });
	}

	console.log('Database seeded successfully.');
}

main()
	.catch(error => {
		console.error('Error seeding database:', error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
