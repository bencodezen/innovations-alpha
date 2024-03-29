import React, { Component } from 'react'
import RecentResults from './RecentSearches'
import SearchResults from './SearchResults'
import Partnerships from './Partnerships'
import ProNews from './ProNews'
import Calendar from './Calendar'

class Main extends Component {
	render() {
		return (
			<main>
				<div className="super">
					<div className="super-inner job-activity">
						<div className="content layout-bi-unequal">
							<div className="content-groupset pos-alpha">
								<h3 className="fz7 mb20">Opportunities</h3>
								<SearchResults />
								<h3 className="fz7 mb20">Recent Searches</h3>
								<RecentResults />
								<h3 className="fz7 mb20">
									Recommended Partners
								</h3>
								<Partnerships />
							</div>
							<div className="content-groupset pos-beta">
								<ProNews />
								<Calendar />
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Main
