'use client'

import Carousel from './Carousel'
import kr from '@/lib/data-kr.json'

export default function OSYTest() {
	return (
		<main className='flex w-full min-h-screen flex-col items-center justify-between py-24'>
			<div className='container w-full'>
				<h1 className='text-3xl lg:text-5xl my-4'>{kr.testHeading}</h1>
				<div className='relative my-6 w-full flex items-center gap-4'>
					<Carousel questions={kr.testQuestions} />
				</div>
			</div>
		</main>
	)
}
