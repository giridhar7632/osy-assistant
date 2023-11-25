import data from '@/lib/data-org.json'
import Link from 'next/link'

export default async function SearchResults({ filter }) {
	// const { rows: entries } =
	// 	await sql`SELECT * from "Organizations" ORDER BY last_modified DESC;`

	return data.organizations.map((entry) => (
		<Link
			href={`/org/${entry.id}`}
			key={entry.id}
			className='flex flex-col space-y-1 mb-4 border border-gray-100 px-6 py-4 rounded-xl hover:shadow-sm'>
			<div className='w-full text-sm break-words'>
				<span className='text-neutral-600 dark:text-neutral-400 mr-1 text-lg font-semibold'>
					{entry.name}{' '}
				</span>{' '}
				- {entry.location}
			</div>
		</Link>
	))
}
