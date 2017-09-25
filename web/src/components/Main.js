import React, { Component } from 'react'
import RecentResults from './RecentSearches'
import SearchResults from './SearchResults'

class Main extends Component {
	render() {
		return (
			<main>
				<div className="super">
					<div className="super-inner job-activity">
						<h3 className="fz7">Job Activity</h3>
						<SearchResults />
						<h3 className="fz7">Recent Searches</h3>
						<RecentResults />
					</div>
				</div>
			</main>
		)
	}
}

export default Main
