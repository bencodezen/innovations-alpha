import React from 'react'

const Calendar = () => {
	return (
		<aside className="content-group">
			<div className="widget caste-exclusive">
				<header className="widget-header">
					<h2>
						<a
							href="https://www.politicopro.com/calendar"
							target="_top"
							data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
							className="js-tealium-tracking"
						>
							POLITICO Pro Calendar
						</a>
					</h2>
				</header>
				<div className="widget-content">
					<ol className="calendar">
						<li className="calendar__day">
							<header className="calendar__header">
								<time datetime="2017-09-25">
									<div className="date-block">
										<p className="numerical-day">25</p>
									</div>
									<div className="date-text">
										<p className="month-year">Sep 2017</p>
										<p className="day-of-week">Monday</p>
									</div>
								</time>
							</header>
							<ol className="calendar__event-list">
								<li className="calendar__item">
									<div className="calendar__time">
										<time datetime="2017-09-25T08:30">
											<span>
												<b
													className="icon icon-clock"
													aria-hidden="true"
												/>
											</span>{' '}
											8:30 AM EDT
										</time>
									</div>
									<div className="product-description">
										<p className="type">Conference Event</p>
										<p className="vertical">
											Cybersecurity
										</p>
										<h3 className="headline">
											<a
												href="https://www.politicopro.com/events/2017/09/tech-trends-conference-162055"
												className="url"
												target="_top"
												data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
											>
												Tech Trends conference
											</a>
										</h3>
										<ul className="description-list">
											<li>
												<b
													className="fa fa-map-marker"
													aria-hidden="true"
												/>
												<p className="location">
													Le Meridien Hotel, 1121 19th
													St. NW, Arlington, Va. 22209
												</p>
											</li>
											<li>
												<b
													className="fa fa-tags"
													aria-hidden="true"
												/>
												<p className="tags">
													Tags:{' '}
													<a
														href="https://www.politicopro.com/cybersecurity/congress"
														target="_top"
														data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
														className="js-tealium-tracking"
													>
														Congress
													</a>,{' '}
													<a
														href="https://www.politicopro.com/cybersecurity/federal-it"
														target="_top"
														data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
														className="js-tealium-tracking"
													>
														Federal IT
													</a>
												</p>
											</li>
										</ul>
									</div>
									<div className="product-cta">
										<ul>
											<li>
												<button
													data-event-id="0000015e-96a0-d079-a3fe-dea49eaf0000"
													className="js-procal-dl-modal js-tealium-procal-dl"
													type="button"
												>
													<b
														aria-hidden="true"
														className="icon icon-download"
													/>
												</button>
											</li>
										</ul>
									</div>
								</li>
								<li className="calendar__item">
									<div className="calendar__time">
										<time datetime="2017-09-25T09:00">
											<span>
												<b
													className="icon icon-clock"
													aria-hidden="true"
												/>
											</span>{' '}
											9:00 AM EDT
										</time>
									</div>
									<div className="product-description">
										<p className="type">
											Senate Committee Event
										</p>
										<p className="vertical">Education</p>
										<h3 className="headline">
											<a
												href="https://www.politicopro.com/events/2017/09/central-high-integration-60th-anniversary-commemoration-ceremony-161299"
												className="url"
												target="_top"
												data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
											>
												Central High Integration 60th
												Anniversary Commemoration
												Ceremony
											</a>
										</h3>
										<ul className="description-list">
											<li>
												<b
													className="fa fa-map-marker"
													aria-hidden="true"
												/>
												<p className="location">
													Little Rock Central High
													School, Little Rock, AR
												</p>
											</li>
											<li>
												<b
													className="fa fa-tags"
													aria-hidden="true"
												/>
												<p className="tags">
													Tags:{' '}
													<a
														href="https://www.politicopro.com/education/states"
														target="_top"
														data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
														className="js-tealium-tracking"
													>
														Education
													</a>,{' '}
													<a
														href="https://www.politicopro.com/education/civil-rights"
														target="_top"
														data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
														className="js-tealium-tracking"
													>
														Civil Rights
													</a>
												</p>
											</li>
										</ul>
									</div>
									<div className="product-cta">
										<ul>
											<li>
												<button
													data-event-id="0000015e-395f-ddc1-ad5e-3b7f47400001"
													className="js-procal-dl-modal js-tealium-procal-dl"
													type="button"
												>
													<b
														aria-hidden="true"
														className="icon icon-download"
													/>
												</button>
											</li>
										</ul>
									</div>
								</li>
							</ol>
						</li>
					</ol>
				</div>
				<footer className="widget-footer">
					<ul>
						<li>
							<a
								href="https://www.politicopro.com/calendar"
								target="_top"
								data-tracking="mpos=right-rail&amp;mid=Unknown&amp;lindex=Unknown&amp;lcol=Unknown"
								className="js-tealium-tracking"
							>
								Full Calendar
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</aside>
	)
}

export default Calendar
