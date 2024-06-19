type MaxWidthWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function MaxWidthWrapper({
	children,
	className,
}: MaxWidthWrapperProps) {
	return (
		<div className={'mx-auto w-full md:max-w-screen-2xl px-2.5 md:px-16'}>
			{children}
		</div>
	);
}
