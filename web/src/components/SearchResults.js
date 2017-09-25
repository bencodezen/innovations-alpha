import React, { Component } from 'react'

class SearchResults extends Component {
	render() {
		return (
			<div className="jobs-box" id="JobActivityWrapper">
				<div data-reactroot="" className="module">
					<div className="simpleTabs">
						<header>
							<nav>
								<ul>
									<li className="inactive">
										<span className="link">
											<span className="hideHH hideTab">
												Recommended Jobs
											</span>
											<span className="count">10</span>
										</span>
									</li>
									<li className="inactive">
										<span className="link">
											<span className="hideHH hideTab">
												Saved Jobs
											</span>
										</span>
									</li>
									<li className="active">
										<span className="link">
											<span className="hideHH hideTab">
												Viewed Jobs
											</span>
											<span className="count">2</span>
										</span>
									</li>
									<li className="inactive">
										<span className="link">
											<span className="hideHH hideTab">
												Applied Jobs
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
										<li className="jl" data-id="2018977840">
											<div className="logoWrap">
												<a
													href="/partner/jobListing.htm?pos=102&amp;ao=230160&amp;s=266&amp;guid=0000015eb6b57b1bb7011a543a38d5e2&amp;src=GD_JOB_AD&amp;vt=w&amp;rtp=0&amp;cb=1506303900443&amp;jobListingId=2018977840"
													rel="nofollow"
													target="_blank"
													className="jobLink"
												>
													<span className="sqLogo tighten undefined smSqLogo">
														<img
															src="https://media.glassdoor.com/sqlm/27819/appian-squarelogo-1436293143929.png"
															alt="Appian Corporation Logo"
															title="Appian Corporation Logo"
														/>
													</span>
												</a>
												<span className="compactStars ">
													90%
												</span>
											</div>
											<div>
												<div className="flexbox">
													<div>
														<a
															href="/partner/jobListing.htm?pos=102&amp;ao=230160&amp;s=266&amp;guid=0000015eb6b57b1bb7011a543a38d5e2&amp;src=GD_JOB_AD&amp;vt=w&amp;rtp=0&amp;cb=1506303900443&amp;jobListingId=2018977840"
															rel="nofollow"
															target="_blank"
															className="jobLink"
														>
															Senior Front End
															Engineer - React.js
														</a>
													</div>
													<div className="alignRt">
														<span className="save-job-button  nowrap padBotSm">
															<i className="fa fa-plus" />
														</span>
													</div>
												</div>
												<div className="flexbox empLoc">
													<div>
														Appian Corporation<span className="subtle loc">Reston, VA</span>
													</div>
												</div>
												<div className="flexbox">
													<div>
														<span className="green small">
															Est. Salary
															$99,000-$123,000
														</span>
													</div>
													<div>
														<span className="hideHH nowrap">
															<span className="minor">
																7 days ago
															</span>
														</span>
													</div>
												</div>
											</div>
										</li>
										<li className="jl" data-id="2379682094">
											<div className="logoWrap">
												<a
													href="/partner/jobListing.htm?pos=101&amp;ao=133110&amp;s=266&amp;guid=0000015eb6b57b1bb7011a543a38d5e2&amp;src=GD_JOB_AD&amp;vt=w&amp;rtp=0&amp;cb=1506303900443&amp;jobListingId=2379682094"
													rel="nofollow"
													target="_blank"
													className="jobLink"
												>
													<span className="sqLogo tighten undefined smSqLogo">
														<img
															src="https://media.glassdoor.com/sqlm/235161/fireeye-squarelogo-1452294049498.png"
															alt="FireEye Logo"
															title="FireEye Logo"
														/>
													</span>
												</a>
												<span className="compactStars ">
													80%
												</span>
											</div>
											<div>
												<div className="flexbox">
													<div>
														<a
															href="/partner/jobListing.htm?pos=101&amp;ao=133110&amp;s=266&amp;guid=0000015eb6b57b1bb7011a543a38d5e2&amp;src=GD_JOB_AD&amp;vt=w&amp;rtp=0&amp;cb=1506303900443&amp;jobListingId=2379682094"
															rel="nofollow"
															target="_blank"
															className="jobLink"
														>
															Senior Staff
															Software Engineer -
															Quick Response
															Capability
														</a>
													</div>
													<div className="alignRt">
														<span className="save-job-button  nowrap padBotSm">
															<i className="fa fa-plus" />
														</span>
													</div>
												</div>
												<div className="flexbox empLoc">
													<div>
														FireEye
														<span className="subtle loc">
															Reston, VA
														</span>
													</div>
												</div>
												<div className="flexbox">
													<div>
														<span className="green small">
															Est. Salary
															$126,000-$171,000
														</span>
													</div>
													<div>
														<span className="hideHH nowrap">
															<span className="minor">
																3 days ago
															</span>
														</span>
													</div>
												</div>
											</div>
										</li>
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
