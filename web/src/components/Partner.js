import React from 'react'

const Partner = ({ company, contract, location, logo, role }) => {
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
							alt=""
							height="64"
							width="64"
							src={logo}
						/>
					</figure>
				</div>
				<div className="job-card__content-wrapper">
					<div className="job-card__title-line">
						<h3
							id="ember3000"
							className="job-card__title ember-view"
						>
							{' '}
							<div className="truncate-multiline--truncation-target">
								<span>{company}</span>
							</div>
						</h3>
					</div>

					<span className="visually-hidden">Company Name</span>
					<h4 className="job-card__company-name">{contract}</h4>
					<h5 className="job-card__location">
						<span className="visually-hidden">Job Location</span>
						{location}
					</h5>

					<p className="job-card__role">Seeking {role}</p>

					<div className="job-card__footer">
						<p className="job-card__listed-status">
							<time className="job-card__time-badge">Save</time>
						</p>
						<div className="job-card__easy-apply">
							<p className="job-card__easy-apply-text">
								<i className="fa fa-thumbs-o-down" />
								<i className="fa fa-thumbs-o-up" />
							</p>
						</div>
					</div>
				</div>
			</a>
		</li>
	)
}

export default Partner
