import React, { Component } from 'react'
import RecentResults from './RecentSearches'
import SearchResults from './SearchResults'

class Main extends Component {
	render() {
		return (
			<div className="col-right job-activity">
				<h3>Job Activity</h3>
				<SearchResults />
				<h3>Recent Searches</h3>
				<RecentResults />
			</div>
		)
	}
}

export default Main
