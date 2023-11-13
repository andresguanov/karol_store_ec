import { Inter, Inter_Tight as InterTight } from 'next/font/google'
import Head from 'next/head'

import { Background } from '@/components/Background'
import { Sponsors } from '@/sections/sponsors'
import { Meteors } from '@/components/MeteorLanguages'
import { Navigation } from '@/components/Navigation'

export const inter = Inter({ weight: ['400', '500', '600', '700', '900'], subsets: ['latin'] })
export const interTight = InterTight({ weight: ['500', '800', '900'], subsets: ['latin'] })

const title = 'miduConf - La conferencia de programación y desarrollo'
const description =
	'Conferencia de programación y tecnología para el día del programador y la programadora'
const defaultOgImage = '/og-image.jpg'
const url = 'https://miduconf.com'

export default function Home() {
	const ogImage = `${url}${defaultOgImage}`

	return (
		<>
			<Head>
				<title>Karol Store</title>
				{/* <meta name='description' content={description} />
				<meta property='og:image' content={ogImage} />
				<meta property='twitter:image' content={ogImage} />
				<meta property='og:title' content={title} />
				<meta property='twitter:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='twitter:description' content={description} />
				<meta property='og:url' content={url} />
				<meta property='twitter:url' content={url} />
				<meta property='og:type' content='website' />
				<meta property='twitter:card' content='summary_large_image' />
				<link rel='icon' href='/favicon.svg' /> */}
			</Head>

			<Meteors />
			<Background />
			<Navigation />


			<main className={`${inter.className} max-w-7xl m-auto mt-24 pb-20 px-4`}>
				<Sponsors />
			</main>
		</>
	)
}

