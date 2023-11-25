'use client'

import { useSearchParams } from 'next/navigation'
import showResults from '@/lib/showResults'
import kr from '@/lib/data-kr.json'

export default function Result() {
	const searchParams = useSearchParams()
	const score = searchParams.get('score')

	return (
		<main className='flex w-full min-h-screen flex-col items-center py-24'>
			<div className='relative my-6 w-full flex flex-col items-center justify-center'>
				<h1 className='text-3xl lg:text-5xl my-6'>
					🎊 {kr.testCompleteHeading}
				</h1>
				<p className='text-5xl font-bold text-blue-500'>{score}</p>
			</div>
			<div className='container p-12'>
				<p className='text-gray-700'>{kr.textResults}: </p>
				{/* {showResults()} */}
			</div>
		</main>
	)
}
