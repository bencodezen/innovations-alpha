import React from 'react'

const RecentSearchLink = ({ location, query }) => {
	return (
		<span>
			<a href="/">
				{query} in {location}
				<i className="fa fa-search" />
			</a>
		</span>
	)
}

export default RecentSearchLink
