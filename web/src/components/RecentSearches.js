import React, { Component } from 'react'
import RecentSearchLink from './RecentSearchLink'

class RecentSearches extends Component {
	render() {
		return (
			<div className="jobs-box">
				<div className="recent-search-tags loaded">
					<RecentSearchLink
						location="Washington, DC"
						query="content management systems"
					/>
					<RecentSearchLink
						location="Rosslyn, VA"
						query="mobile apps"
					/>
					<RecentSearchLink
						location="Bethesda, MD"
						query="accessibility audit"
					/>
					<RecentSearchLink
						location="Washington, DC"
						query="progressive web applications"
					/>
					<RecentSearchLink
						location="Washington, DC"
						query="aws cloud solution"
					/>
					<RecentSearchLink
						location="Arlington, VA"
						query="infrastructure support"
					/>
				</div>
				<div className="recent-search-more">
					<a className="gd-btn gd-btn-2">See All Recent Searches</a>
				</div>
				<div className="recent-search-empty hidden">
					You have no recent searches. Start a job search today!
				</div>
			</div>
		)
	}
}

export default RecentSearches
