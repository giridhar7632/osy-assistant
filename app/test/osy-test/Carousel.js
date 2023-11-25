import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from '@/lib/icons'
import Button from '@/components/Button'
import kr from '@/lib/data-kr.json'
import Link from 'next/link'

const variants = {
	enter: (direction) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			display: 'none',
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity
}

const Carousel = ({ questions }) => {
	const [[page, direction], setPage] = useState([0, 0])
	const [score, setScore] = useState(0)
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])

	const getPage = (page) =>
		page < 0
			? questions[(page + questions?.length) % questions?.length]
			: questions[page % questions?.length]

	const paginate = useCallback(
		(newDirection) => {
			setPage([page + newDirection, newDirection])
		},
		[page]
	)

	const selectOption = (weight) => {
		if (page + 2 < questions.length) {
			setScore((prev) => prev + weight)
			console.log({ weight, score })
			paginate(1)
		}
	}

	console.log({ direction, score, page })

	return (
		mounted && (
			<div className='w-full'>
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={page}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x)
							if (swipe < -swipeConfidenceThreshold) {
								paginate(1)
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1)
							}
						}}
						className='relative w-full flex items-center justify-center'>
						<div className='w-full flex flex-col border border-gray-100 rounded-xl p-6 md:p-12'>
							<motion.p className={'text-xl font-semibold mb-4'}>
								{page + 1} .{getPage(page)?.question}
							</motion.p>
							{getPage(page)?.options.map((i, idx) => (
								<div
									className='cursor-pointer'
									onClick={() => selectOption(i.weight)}
									key={idx}>
									{idx + 1} . {i.option}
								</div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
				<div className='w-full flex items-center justify-between p-6'>
					<Button
						variant='text'
						disabled={page < 1}
						onClick={() => paginate(-1)}>
						<ChevronLeft width={24} height={24} />
						{kr.textPrevious}
					</Button>
					<Button
						onClick={() => paginate(1)}
						disabled={page + 2 > questions.length}
						variant='text'>
						{kr.textNext}
						<ChevronRight width={24} height={24} />
					</Button>
				</div>

				{page + 2 > questions.length && (
					<Link href={`/test/result?score=${score}`} className='w-full'>
						<Button className={'w-full'}>{kr.textShowResults}</Button>
					</Link>
				)}
			</div>
		)
	)
}

export default Carousel
