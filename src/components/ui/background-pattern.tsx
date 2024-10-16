export default function BackgroundPattern() {
	return (
		<>
			<div className='bg-gradient-to-t from-transparent via-[#e6e6e6]/40 dark:via-[#1b1918]/50 to-transparent h-[15px] w-full absolute bottom-0 -z-10'>
				<svg
					className='w-1/2 h-[0.40rem] text-primary absolute bottom-0 left-0 opacity-50'
					preserveAspectRatio='none'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 100 100'
					fill='currentColor'
				>
					<path d='M 0 40 Q 25 60 50 40 T 100 30 L 100 100 0 100 Z'></path>
				</svg>
			</div>

			<div className='bg-gradient-to-b from-transparent via-[#e6e6e6]/40 dark:via-[#1b1918]/50 to-transparent h-[15px] w-full absolute bottom-0 -z-10'>
				<svg
					className='w-1/2 h-[0.40rem] text-secondary absolute bottom-0 right-0 opacity-50'
					preserveAspectRatio='none'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 100 100'
					fill='currentColor'
				>
					<path d='M 0 30 Q 25 50 50 30 T 100 30 L 100 100 0 100 Z'></path>
				</svg>
			</div>
		</>
	);
}
