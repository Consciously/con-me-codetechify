'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Step = {
	id: number;
	label: string;
	path: string;
};

type StepperProps = {
	steps: Step[];
};

export default function Stepper({ steps }: StepperProps) {
	const pathname = usePathname();

	const getCurrentStep = (): number => {
		const currentStep = steps.findIndex(step => pathname.startsWith(step.path));
		return currentStep !== -1 ? currentStep : 0;
	};

	const currentStep = getCurrentStep();

	const getStepStyles = (
		stepIndex: number,
	): { border: string; text: string } => {
		if (stepIndex < currentStep) {
			return { border: 'border-primary', text: 'text-primary' }; // finished step
		}
		if (stepIndex === currentStep) {
			return { border: 'border-secondary', text: 'text-secondary' }; // current step
		}
		return { border: 'border-foreground/20', text: 'text-foreground' }; // upcoming step
	};

	return (
		<div className='flex items-center justify-center w-full space-x-8'>
			{steps.map((step, index) => {
				const { border, text } = getStepStyles(index);
				return (
					<div key={step.id} className='flex items-center space-x-4'>
						{/* Step Card */}
						<div
							className={cn(
								'flex items-center justify-center w-40 h-20 p-4 border-2 rounded-lg text-center',
								border,
							)}
						>
							<span className={cn('text-lg font-semibold', text)}>
								{step.label}
							</span>
						</div>

						{/* Line and Circle */}
						{index !== steps.length - 1 && (
							<>
								<div className={cn('w-12 border-t-2', border)}></div>
								{/* Step Indicator Circle */}
								<div
									className={cn(
										'flex items-center justify-center w-8 h-8 border-2 rounded-full',
										border,
									)}
								>
									<span className={cn('text-lg font-semibold', text)}>
										{index + 1}
									</span>
								</div>
								<div
									className={cn(
										'w-12 border-t-2',
										getStepStyles(index + 1).border,
									)}
								></div>
							</>
						)}

						{/* Last Step Line and Circle */}
						{index === steps.length - 1 && (
							<>
								<div className={cn('w-12 border-t-2', border)}></div>
								<div
									className={cn(
										'flex items-center justify-center w-8 h-8 border-2 rounded-full',
										border,
									)}
								>
									<span className={cn('text-lg font-semibold', text)}>
										{index + 1}
									</span>
								</div>
							</>
						)}
					</div>
				);
			})}
		</div>
	);
}
