import React, { Component } from 'react'

class ContractPreview extends Component {
	render() {
		const { awardDate, department, logo, rating, title, value } = this.props

		return (
			<li className="jl" data-id="2018977840">
				<div className="logoWrap">
					<a
						href="/"
						rel="nofollow"
						target="_blank"
						className="jobLink"
					>
						<span className="sqLogo tighten undefined smSqLogo">
							<img src={logo} />
						</span>
					</a>
					<span className="compactStars ">{rating}</span>
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
								{title}
							</a>
						</div>
						<div className="alignRt">
							<span className="save-job-button  nowrap padBotSm">
								<i className="fa fa-plus" />
							</span>
						</div>
					</div>
					<div className="flexbox empLoc">
						<div>{department}</div>
					</div>
					<div className="flexbox">
						<div>
							Est. Value:{' '}
							<span className="green small">{value}</span>
						</div>
					</div>
					<div className="flexbox">
						<div>Est. Award Date: {awardDate}</div>
						<div>
							<span className="hideHH nowrap">
								<span className="minor">7 days ago</span>
							</span>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default ContractPreview
