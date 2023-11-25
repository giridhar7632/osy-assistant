import Button from '@/components/Button'
import kr from '@/lib/data-kr.json'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex w-full min-h-screen flex-col items-center justify-between py-24'>
			<div className='container'>
				<h1 className='text-3xl lg:text-5xl my-4'>{kr.hero}</h1>
				<p className='text-lg md:text-xl'>{kr.subtitle}</p>
				<div className='container my-6 flex items-center gap-4'>
					<Link href={'/search'}>
						<Button>{kr.btnSearch}</Button>
					</Link>
					<Link href={'/contact'}>
						<Button variant='secondary'>{kr.btnContact}</Button>
					</Link>
				</div>
			</div>
		</main>
	)
}
