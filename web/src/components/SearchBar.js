import React, { Component } from 'react'

class SearchBar extends Component {
	render() {
		return (
			<header id="TopNav" className="super">
				<div className="search-bar super-inner">
					<div className="container-form" id="SiteSrchTop">
						<form
							action="/Job/jobs.htm"
							method="get"
							target="_top"
							data-location-string-from-ip="Falls Church, VA"
							data-loc-ac-enabled="true"
							data-pick-best-match="true"
							data-zipcodes-ok="true"
						>
							<label for="sc.keyword" className="offScreen">
								Keyword
							</label>
							<input
								name="sc.keyword"
								id="sc.keyword"
								className="keyword"
								type="text"
								placeholder="Job Title, Keywords, or Company"
								data-auto-complete="true"
								autofocus="autofocus"
								data-ac-version="New"
								autocomplete="off"
							/>
							<label for="sc.location" className="offScreen">
								Location
							</label>
							<input
								id="sc.location"
								className="loc"
								type="text"
								data-srch-type="popular"
								placeholder="Location"
								autocomplete="off"
							/>
							<div
								className="context-picker inactive"
								tabindex="0"
							/>
							<button
								className="gd-btn-mkt button--standard button--denim-blue"
								id="HeroSearchButton"
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</header>
		)
	}
}

export default SearchBar
