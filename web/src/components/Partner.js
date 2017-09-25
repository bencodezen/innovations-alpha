import React from 'react'

const Partner = props => {
	return (
		<li className="peek-carousel__card-item job-card--carousel-item job-card job-card--tile ember-view">
			<a
				data-control-name="similartoviewed_view_job"
				href="/jobs/view/403050936/?recommendedFlavor=SCHOOL_RECRUIT&amp;trk=d_flagship3_job_home"
				id="ember2999"
				className="job-card__link-wrapper js-focusable-card ember-view"
			>
				{' '}
				<div className="job-card__image-and-sponsored-container">
					<figure className="job-card__logo-wrapper">
						<img
							className="lazy-image job-card__logo-image loaded"
							title="LinkedIn"
							alt=""
							height="64"
							width="64"
							src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAANyAAAAJGRlZTNlZDQwLTk4YTItNDA1MS04MzBjLWJmNGQ5M2RmZGUxYw.png"
						/>
					</figure>
				</div>
				<div className="job-card__content-wrapper">
					<span className="visually-hidden">Job Title</span>
					<div className="job-card__title-line">
						<h3
							id="ember3000"
							className="job-card__title ember-view"
						>
							{' '}
							<div className="truncate-multiline--truncation-target">
								<span>Software Engineer: Frontend + UI </span>
								<span className="truncate-multiline--last-line-wrapper">
									<span>(NYC)</span>
									<button
										className="truncate-multiline--button-hidden"
										data-ember-action=""
										data-ember-action-3988="3988"
									/>
								</span>
							</div>
						</h3>
					</div>

					<span className="visually-hidden">Company Name</span>
					<h4 className="job-card__company-name">LinkedIn</h4>
					<h5 className="job-card__location">
						<span className="visually-hidden">Job Location</span>
						New York City, NY, US
					</h5>

					<div className="job-card__job-flavors-container">
						<ul id="ember3006" className="job-flavors ember-view">
							{' '}
							<li className="job-flavors__flavor-wrapper">
								<div
									id="ember3013"
									className="job-flavors__flavor job-flavors__flavor--school-recruit ember-view"
								>
									<div className="job-flavors__logo-container">
										<img
											className="lazy-image loaded job-flavors__logo-image"
											title="University of Maryland Baltimore County"
											alt="University of Maryland Baltimore County"
											src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/6/005/008/1dd/1bdfb3a.png"
										/>
									</div>

									<div className="job-flavors__label">
										7 alumni
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div className="job-card__footer">
						<p className="job-card__listed-status">
							{' '}
							<time className="job-card__time-badge">
								3 weeks ago
							</time>
						</p>
						<div className="job-card__easy-apply">
							<p className="job-card__easy-apply-text">
								Easy Apply
							</p>
						</div>
					</div>
				</div>
			</a>
		</li>
	)
}

export default Partner
