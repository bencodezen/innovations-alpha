import React, { Component } from 'react'
import ContractPreview from './ContractPreview'

class SearchResults extends Component {
	render() {
		return (
			<div className="jobs-box" id="JobActivityWrapper">
				<div data-reactroot="" className="module">
					<div className="simpleTabs">
						<header>
							<nav>
								<ul>
									<li className="active">
										<span className="link">
											<span className="hideHH hideTab">
												Recommended
											</span>
											<span className="count">4</span>
										</span>
									</li>
									<li className="inactive">
										<span className="link">
											<span className="hideHH hideTab">
												Saved
											</span>
										</span>
									</li>
									<li className="inactive">
										<span className="link">
											<span className="hideHH hideTab">
												Recently Viewed
											</span>
										</span>
									</li>
									<li className="inactive">
										<span className="link">
											<span className="hideHH hideTab">
												In Queue
											</span>
										</span>
									</li>
								</ul>
							</nav>
						</header>
						<article>
							<article>
								<div>
									<ul className="jlGrid">
										<ContractPreview
											awardDate="09/30/2017"
											department="Department of Health and Human Services"
											logo="https://www.hhs.gov/sites/default/files/hhs-emblem-black.gif"
											rating="90%"
											title="Community Development Software Solution"
											value="$1,500,000"
										/>
										<ContractPreview
											awardDate="09/30/2017"
											department="Department of Health and Human Services"
											logo="https://www.hhs.gov/sites/default/files/hhs-emblem-black.gif"
											rating="90%"
											title="Community Development Software Solution"
											value="$1,500,000"
										/>
										<ContractPreview
											awardDate="09/30/2017"
											department="Department of Health and Human Services"
											logo="https://www.hhs.gov/sites/default/files/hhs-emblem-black.gif"
											rating="90%"
											title="Community Development Software Solution"
											value="$1,500,000"
										/>
										<ContractPreview
											awardDate="09/30/2017"
											department="Department of Health and Human Services"
											logo="https://www.hhs.gov/sites/default/files/hhs-emblem-black.gif"
											rating="90%"
											title="Community Development Software Solution"
											value="$1,500,000"
										/>
									</ul>
								</div>
							</article>
						</article>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchResults
