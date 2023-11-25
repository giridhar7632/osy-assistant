'use client'

import { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import Input from '@/components/Input'
import SearchResults from './SearchResults'
import kr from '@/lib/data-kr.json'

export default function Search() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onFormSubmit = handleSubmit(async (data) => {
		console.log({ data })
	})

	return (
		<main className='flex w-full min-h-screen flex-col items-center justify-between py-24'>
			<div className='container'>
				<h1 className='text-3xl lg:text-5xl my-4'>{kr.searchHero}</h1>
				<p className='text-lg md:text-xl'>{kr.searchSubtitle}</p>
				<div className='container my-6'>
					<form className='flex items-center gap-2 w-full'>
						<Input
							aria-label={kr.searchPlaceholder}
							placeholder={kr.searchPlaceholder}
							name='entry'
							type='text'
							required
							divClass={'w-full h-12'}
							register={register('entry')}
							error={errors?.entry}
						/>
						<Button onClick={onFormSubmit}>Search</Button>
					</form>

					<div className='mt-12 mx-6'>
						<p className='text-xs text-gray-500 mb-2'>검색 결과:</p>
						<Suspense fallback={<p>loading...</p>}>
							<SearchResults />
						</Suspense>
					</div>
				</div>
			</div>
		</main>
	)
}
