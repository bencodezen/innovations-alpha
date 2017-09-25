import React, { Component } from 'react'

class RecentSearches extends Component {
	render() {
		return (
			<div>
				<div className="recent-search-tags loaded">
					<span>
						<a href="/Job/jobs.htm?sc.keyword=senior ui engineer&amp;locT=C&amp;locId=1138213&amp;locKeyword=Washington, DC">
							senior ui engineer in Washington, DC<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=senior front end developer&amp;locT=C&amp;locId=1130359&amp;locKeyword=Fairfax, VA">
							senior front end developer in Fairfax, VA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=senior front end developer&amp;locT=C&amp;locId=1130359&amp;locKeyword=Fairfax, VA">
							senior front end developer in Fairfax, VA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=bookrack&amp;locT=C&amp;locId=1147401&amp;locKeyword=San Francisco, CA">
							bookrack in San Francisco, CA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=myfitnesspal&amp;locT=C&amp;locId=1147401&amp;locKeyword=San Francisco, CA">
							myfitnesspal in San Francisco, CA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=junior ios developer&amp;locT=C&amp;locId=1147401&amp;locKeyword=San Francisco, CA">
							junior ios developer in San Francisco, CA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=junior ios developer&amp;locT=&amp;locId=0&amp;locKeyword=">
							junior ios developer<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=ios developer&amp;locT=C&amp;locId=1147401&amp;locKeyword=San Francisco, CA">
							ios developer in San Francisco, CA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=senior Front End Developer&amp;locT=C&amp;locId=1130359&amp;locKeyword=Fairfax, VA">
							senior Front End Developer in Fairfax, VA<i className="fa fa-search" />
						</a>
					</span>
					<span>
						<a href="/Job/jobs.htm?sc.keyword=principal Front End Developer&amp;locT=C&amp;locId=1130359&amp;locKeyword=Fairfax, VA">
							principal Front End Developer in Fairfax, VA<i className="fa fa-search" />
						</a>
					</span>
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
