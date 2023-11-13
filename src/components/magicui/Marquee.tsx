import { cn } from '@/lib/utils'
import { Children, ReactNode, cloneElement } from 'react'

interface MarqueeProps {
	className?: string
	reverse?: boolean
	pauseOnHover?: boolean
	children?: ReactNode
	[key: string]: unknown
	size?: string
}

export const Marquee = ({
	className,
	reverse,
	pauseOnHover = false,
	children,
	...props
}: MarqueeProps) => {
	return (
		<div
			{...props}
			className={cn('flex w-full overflow-x-hidden [--duration:40s] [--gap:1rem]', className, {
			})}
		>
			<div
				className={cn('flex w-max animate-marquee items-stretch gap-[--gap]', {
					'[animation-direction:reverse]': reverse,
					'hover:[animation-play-state:paused]': pauseOnHover
				})}
			>
				{children}

			</div>
		</div>
	)
}

export default Marquee
