export default function BackgroundPattern() {
	return (
		<>
			<div className='bg-gradient-to-t from-transparent via-[#e6e6e6]/40 dark:via-[#1b1918]/50 to-transparent h-[15px] w-full absolute bottom-0 -z-10' />
			<div className='bg-gradient-to-b from-transparent via-[#e6e6e6]/40 dark:via-[#1b1918]/50 to-transparent h-[15px] w-full absolute bottom-0 -z-10' />
		</>
	);
}
