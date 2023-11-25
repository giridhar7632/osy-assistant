import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'
import kr from '@/lib/data-kr.json'

export default function OSYBasic() {
	return (
		<main className='flex w-full min-h-screen flex-col items-center justify-between py-24'>
			<div className='container'>
				<h1 className='text-3xl lg:text-5xl my-4'>{kr.testHero}</h1>
				<p className='text-lg md:text-xl'>{kr.testDescription}</p>
				<p className='my-2 text-xl text-blue-500'>{kr.testSubtitle}</p>
				<div className='container my-6 flex items-center gap-4'>
					<Link href={'/test/osy-test'}>
						<Button>{kr.testStart}</Button>
					</Link>
				</div>

				<div className='container my-6'>
					<h2 className='text-gray-700 mb-2'>{kr.testInstructionsHeading}:</h2>
					<ol className='mx-6'>
						{kr.testInstructions.map((i, idx) => (
							<li key={idx} className='text-xs'>
								{idx + 1}. {i}
							</li>
						))}
					</ol>
				</div>
			</div>
		</main>
	)
}
