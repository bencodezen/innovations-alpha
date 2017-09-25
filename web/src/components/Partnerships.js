import React, { Component } from 'react'
import Partner from './Partner'

class Partnerships extends Component {
	render() {
		return (
			<div className="jobs-box jobs-box--full-width">
				{/* Partnership Title Bar */}
				<div className="display-flex justify-space-between pt3">
					<div className="jobs-box--inset">
						<h2 className="jobs-box__title jobs-box__title--no-bottom jobs-box__title--dense">
							Because you viewed
						</h2>
						<p>
							<a
								data-control-name="similartoviewed_seed_job"
								href="/jobs/view/364227708/"
								id="ember2977"
								className="jobs-box__sub-title jobs-box__sub-title--light jobs-box__sub-title--link ember-view"
							>
								{' '}
								Software Engineer: Frontend + UI at LinkedIn
							</a>{' '}
						</p>
					</div>

					<div className="jobs-box--inset display-flex">
						<a
							data-control-name="similartoviewed_see_all_desktop"
							href="/jobs/search/?keywords=Software%20Engineer%3A%20Frontend%20%2B%20UI"
							id="ember2978"
							className="peek-carousel-controls__link mr4 js-update ember-view"
						>
							{' '}
							See all
						</a>{' '}
						<div
							id="ember2983"
							className="peek-carousel-controls display-flex align-items-center ember-view"
						>
							<button
								disabled=""
								className="peek-carousel-controls__button js-left_click"
							>
								<span className="svg-icon-wrap">
									<span className="visually-hidden">
										Move slides left
									</span>
									<span
										aria-hidden="true"
										type="chevron-left-icon"
										size="large"
									>
										<svg
											viewBox="0 0 24 24"
											width="24px"
											height="24px"
											x="0"
											y="0"
											preserveAspectRatio="xMinYMin meet"
											className="artdeco-icon"
										>
											<g className="large-icon">
												<path d="M10,12l6,8.94L14.45,22,8.26,12.85a1.5,1.5,0,0,1,0-1.69L14.45,2,16,3.06Z" />
											</g>
										</svg>
									</span>
								</span>
							</button>
							<button className="peek-carousel-controls__button js-right_click">
								<span className="svg-icon-wrap">
									<span className="visually-hidden">
										Move slides right
									</span>
									<span
										aria-hidden="true"
										type="chevron-right-icon"
										size="large"
									>
										<svg
											viewBox="0 0 24 24"
											width="24px"
											height="24px"
											x="0"
											y="0"
											preserveAspectRatio="xMinYMin meet"
											className="artdeco-icon"
										>
											<g className="large-icon">
												<path d="M14,12L8,3.06,9.55,2l6.19,9.15a1.5,1.5,0,0,1,0,1.69L9.55,22,8,20.94Z" />
											</g>
										</svg>
									</span>
								</span>
							</button>
						</div>
					</div>
				</div>
				{/* Partnership Cards */}
				<div className="peek-carousel">
					<ul className="peek-carousel__slides">
						<Partner />
						<Partner />
						<Partner />
						<Partner />
					</ul>
				</div>
			</div>
		)
	}
}

export default Partnerships
