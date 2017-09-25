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
											daysAgo="4"
											department="Department of Health and Human Services"
											logo="https://www.hhs.gov/sites/default/files/hhs-emblem-black.gif"
											rating="90%"
											iconName="fa fa-check"
											iconColor="green"
											title="Community Development Software Solution"
											value="$1,500,000"
										/>
										<ContractPreview
											awardDate="09/30/2017"
											daysAgo="12"
											department="National Cancer Institute"
											logo="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0001/0943/brand.gif?itok=H7JqnZzc"
											rating="87%"
											title="Mobile Application Development"
											value="$750,000"
										/>
										<ContractPreview
											awardDate="09/30/2017"
											daysAgo="3"
											department="Department of Labor"
											logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_the_United_States_Department_of_Labor.svg/1200px-Seal_of_the_United_States_Department_of_Labor.svg.png"
											rating="84%"
											title="Service Plan for IT Infrastructure"
											value="$2,400,000"
										/>
										<ContractPreview
											awardDate="09/30/2017"
											daysAgo="7"
											department="Department of Energy"
											logo="https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_United_States_Department_of_Energy.svg"
											rating="81%"
											title="Website Redesign"
											value="$800,000"
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
