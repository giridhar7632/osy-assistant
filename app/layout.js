import { Inter } from 'next/font/google'
import './globals.css'
import Button from '@/components/Button'
import kr from '@/lib/data-kr.json'
import Link from 'next/link'
// import LanguageSwitch from './LanguageSwitch'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'OSY assistance',
	description: 'Created to make impact for out of school youth in south korea',
}

export default function RootLayout({ children }) {
	return (
		<html lang='kr'>
			<body className={`max-w-5xl px-4 lg:px-0 mx-auto ${inter.className}`}>
				<nav className='flex py-4 items-center justify-between'>
					<p>STI-31</p>
					<Link href={'/test/osy-basic-info'}>
						<Button>{kr.btnStartQuiz}</Button>
					</Link>
					{/* <LanguageSwitch /> */}
				</nav>
				{children}
			</body>
		</html>
	)
}
