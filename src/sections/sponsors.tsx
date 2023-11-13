import Marquee from '@/components/magicui/Marquee'
import { ShimmerButton } from '@/components/magicui/ShimmerButton'
import type { ReactNode } from 'react'

const reviews = [
	{
		name: 'Autentia',
		link: '#',
		logo: <img className='h-full object-cover' src='/img/clothes/clothes.jpg' alt='logo de Autentia' />
	},
	{
		name: 'Autentia',
		link: '#',
		logo: <img className='h-full object-cover' src='/img/clothes/clothes02.JPG' alt='logo de Autentia' />
	},
	{
		name: 'Autentia',
		link: '#',
		logo: <img className='h-full object-cover' src='/img/clothes/clothes03.JPG' alt='logo de Autentia' />
	}, {
		name: 'Autentia',
		link: '#',
		logo: <img className='h-full object-cover' src='/img/clothes/clothes04.JPG' alt='logo de Autentia' />
	}, {
		name: 'Autentia',
		link: '#',
		logo: <img className='h-full object-cover' src='/img/clothes/clothes05.JPG' alt='logo de Autentia' />
	}

]


const ReviewCard = ({
	logo,
	link
}: {
	logo?: string | ReactNode
	link: string
	premium?: boolean
	size?: string
}) => {
	return (
		<div
			className={'relative min-w-[500px] border-yellow-300 hover:border-yellow-200 flex justify-center items-center overflow-hidden rounded-xl border bg-white w-full h-96 transition hover:bg-white hover:shadow-lg group'}
		>
			{/* <div className='flex flex-row items-center justify-center w-full h-auto text-white transition group-hover:scale-110'> */}
			{logo}
			{/* </div> */}
		</div>
	)
}

export const Sponsors = () => {
	return (
		<section id='sponsors' className='flex flex-col flex-wrap items-center justify-center pt-32'>
			<h2 className='text-6xl font-bold text-center text-white'>Karol Store</h2>
			<p className='max-w-xl text-xl text-sky-200 text-center [text-wrap:balance] mt-4'>
				¡La mejor tienda de ropa del mundo!
			</p>

			<div className='relative flex flex-col items-center justify-center w-full h-full gap-4 py-20 overflow-hidden rounded-lg bg-background'>

				<div className='relative flex flex-col w-full overflow-hidden gap-y-4'>
					<Marquee reverse pauseOnHover className='[--duration:20s]'>
						{reviews
							.slice()
							.reverse()
							.map((review) => (
								<ReviewCard key={review.name} {...review} />
							))}
					</Marquee>
					<Marquee pauseOnHover className='[--duration:20s]'>
						{reviews.slice().map((review) => (
							<ReviewCard key={review.name} {...review} />
						))}
					</Marquee>
					<div className='absolute inset-y-0 left-0 w-40 pointer-events-none from-[#e2988b] to-transparent bg-gradient-to-r '></div>
					<div className='absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-[#e2988b]'></div>
				</div>
				{/* Botones */}
				<div className='flex flex-col items-center justify-center gap-4 mx-auto scale-90 md:flex-row sm:scale-100'>
					<a href='https://api.whatsapp.com/send?phone=593982969126&text=Hola Karol, quiero hacer un pedido' target='_blank'>
						<ShimmerButton size='large'>
							<svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-whatsapp' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
								<path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
							</svg>
							¡Realiza tu pedido!
						</ShimmerButton>
					</a>

					<a href='https://www.instagram.com/karolina_quintt/' target='_blank'>

						<ShimmerButton
							shimmerDuration='0'
							shimmerSize='0'
							type='secondary'
							// onClick={handleGoToDiscord}
							size='large'
						>

						La más hermosa del universo
						</ShimmerButton>
					</a>
				</div>
			</div>
		</section>
	)
}
