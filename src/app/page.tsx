import MaxWidthWrapper from '@/components/max-width-wrapper';

export default function Home() {
	return (
		<>
			<section>
				<MaxWidthWrapper>
					<div className='grid grid-cols-12 gap-6 md:gap-12'>
						<div className='col-span-full'>
							<h1 className='text-3xl/relaxed md:text-5xl/relaxed xl:text-7xl/relaxed font-semibold tracking-tight'>
								Hello World!
							</h1>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
			<section>Skills and Services</section>
			<section>Projects</section>
			<section>Tech stuff</section>
		</>
	);
}
