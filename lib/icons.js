import React from 'react'

function GenerateIcon(data, props) {
	return React.createElement(
		data.tag,
		{ ...data.attr, ...props },
		data.child.map((item) =>
			React.createElement(item.tag, { ...item.attr, key: Math.random() })
		)
	)
}

export function ChevronLeft(props) {
	return GenerateIcon(
		{
			tag: 'svg',
			attr: {
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			},
			child: [{ tag: 'polyline', attr: { points: '15 6 9 12 15 18' } }],
		},
		props
	)
}

export function ChevronRight(props) {
	return GenerateIcon(
		{
			tag: 'svg',
			attr: {
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			},
			child: [{ tag: 'polyline', attr: { points: '9 6 15 12 9 18' } }],
		},
		props
	)
}
