import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<div className="global-header" role="banner">
				<div className="global-header-inner">
					<nav className="nav-macro subnav">
						<h5
							className="subnav-toggle keyboard-accessible"
							role="button"
						>
							<b aria-hidden="true" className="icon icon-menu" />
							<span className="icon-text">Menu</span>
						</h5>
						<div className="subnav-content">
							<div className="macro-row macro-verticals">
								<div className="vertical-group capacity-small menu reveal-at-medium reveal-at-large reveal-at-extra">
									<h6
										className="menu-toggle keyboard-accessible"
										role="button"
									>
										<a href="www.politico.com">
											Policy Areas
										</a>
									</h6>

									<ul className="vertical-list menu-content">
										<li>
											<a
												href="https://www.politicopro.com/agriculture"
												target="_top"
											>
												Agriculture
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/budget"
												target="_top"
											>
												Budget &amp; Appropriations
												Brief
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/campaigns"
												target="_top"
											>
												Campaigns
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/cybersecurity"
												target="_top"
											>
												Cybersecurity{' '}
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/defense"
												target="_top"
											>
												Defense
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/education"
												target="_top"
											>
												Education
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/ehealth"
												target="_top"
											>
												eHealth
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/employment"
												target="_top"
											>
												Employment &amp; Immigration
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/energy"
												target="_top"
											>
												Energy
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/europe-brief"
												target="_top"
												className="politico-auth auth-logged-in"
											>
												Europe Brief
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/financialservices"
												target="_top"
											>
												Financial Services
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/healthcare"
												target="_top"
												className="is-not-subscribed"
											>
												Health Care
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tax"
												target="_top"
											>
												Tax
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tech"
												target="_top"
											>
												Technology
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/trade"
												target="_top"
											>
												Trade
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/transportation"
												target="_top"
											>
												Transportation{' '}
											</a>
										</li>
									</ul>
								</div>
								<div className="vertical-group capacity-small menu reveal-at-medium reveal-at-large reveal-at-extra">
									<h6
										className="menu-toggle keyboard-accessible"
										role="button"
									>
										<a href="www.politico.com">Tools</a>
									</h6>

									<ul className="vertical-list menu-content">
										<li>
											<a href="https://cd.politicopro.com/">
												Congressional Directory
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/campaigns/dashboard"
												target="_top"
											>
												Campaign Pro Race Dashboard
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/datapoint"
												target="_top"
												className="politico-auth auth-logged-in"
											>
												DataPoint
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/defense-program-watch"
												target="_top"
											>
												Defense Program Watch
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/document-drawer"
												target="_top"
											>
												Document Drawer
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/energy/regulation-watch"
												target="_top"
											>
												Energy Regulation Watch
											</a>
										</li>
										<li>
											<a href="https://lt.politicopro.com">
												Legislative Compass
											</a>
										</li>
										<li>
											<a href="https://www.politicopro.com/calendar">
												My Calendar
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/pro-tax-watch"
												target="_top"
											>
												Pro Tax Tracker
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/education/tracker"
												target="_top"
												className="politico-auth auth-logged-in"
											>
												State Education Tracker
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/fiscal-2018-appropriations-watch"
												target="_top"
											>
												Appropriations Watch
											</a>
										</li>
									</ul>
								</div>
								<div className="vertical-group capacity-small menu reveal-at-medium reveal-at-large reveal-at-extra">
									<h6
										className="menu-toggle keyboard-accessible"
										role="button"
									>
										<a href="www.politico.com">
											Newsletters
										</a>
									</h6>

									<ul className="vertical-list menu-content">
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/ceo-report"
												target="_top"
											>
												CEO Report
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/day-ahead"
												target="_top"
											>
												Day Ahead
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/politico-influence"
												target="_top"
											>
												POLITICO Influence
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/pro-report"
												target="_top"
											>
												Pro Report
											</a>
										</li>
									</ul>
								</div>
								<div className="vertical-group capacity-small menu reveal-at-medium reveal-at-large reveal-at-extra">
									<h6
										className="menu-toggle keyboard-accessible"
										role="button"
									>
										<a href="www.politico.com">
											Morning Tipsheets
										</a>
									</h6>

									<ul className="vertical-list menu-content">
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/campaign-pros-morning-score"
												target="_top"
											>
												Campaign Pro's Morning Score
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/europe-brief-morning-update"
												target="_top"
											>
												Europe Brief: Morning Update
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-agriculture"
												target="_top"
											>
												Morning Agriculture
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-cybersecurity"
												target="_top"
											>
												Morning Cybersecurity
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-defense"
												target="_top"
											>
												Morning Defense
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-education"
												target="_top"
											>
												Morning Education
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-ehealth"
												target="_top"
											>
												Morning eHealth
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-energy"
												target="_top"
											>
												Morning Energy
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-money-fs"
												target="_top"
											>
												Morning Money
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-shift"
												target="_top"
											>
												Morning Shift
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-tax"
												target="_top"
											>
												Morning Tax
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-tech"
												target="_top"
											>
												Morning Tech
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-trade"
												target="_top"
											>
												Morning Trade
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/morning-transportation"
												target="_top"
											>
												Morning Transportation
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/pulse"
												target="_top"
												className="is-not-subscribed"
											>
												Pulse
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/prescription-pulse"
												target="_top"
												className="is-not-subscribed"
											>
												Prescription Pulse
											</a>
										</li>
									</ul>
								</div>
								<div className="vertical-group capacity-small menu reveal-at-medium reveal-at-large reveal-at-extra">
									<h6
										className="menu-toggle keyboard-accessible"
										role="button"
									>
										<a href="www.politico.com">
											Afternoon Tipsheets
										</a>
									</h6>

									<ul className="vertical-list menu-content">
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/afternoon-energy"
												target="_top"
											>
												Afternoon Energy
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/afternoon-pulse"
												target="_top"
												className="is-not-subscribed"
											>
												Afternoon Pulse
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/budget-appropriations-brief"
												target="_top"
											>
												<p>
													Budget &amp; Appropriations
													Brief
												</p>
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/europe-brief"
												target="_top"
												className="politico-auth auth-logged-in"
											>
												Europe Brief
											</a>
										</li>
									</ul>
								</div>
								<div className="vertical-group capacity-small menu reveal-at-medium reveal-at-large reveal-at-extra">
									<h6
										className="menu-toggle keyboard-accessible"
										role="button"
									>
										<a href="www.politico.com">More</a>
									</h6>

									<ul className="vertical-list menu-content">
										<li>
											<a
												href="https://www.politicopro.com/aboutus"
												target="_top"
											>
												About Us
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/corrections"
												target="_top"
											>
												Corrections
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/member/support"
												target="_top"
											>
												Support
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</nav>
					<div className="global-branding">
						<h1>
							<a
								href="https://www.politicopro.com/"
								title="Home"
								target="_top"
							>
								<b
									aria-hidden="true"
									className="icon icon-politico is-emphasized"
								/>
								<b
									aria-hidden="true"
									className="icon icon-pro-small"
								/>
								<span className="icon-text">POLITICO PRO</span>
							</a>
						</h1>
					</div>

					<nav className="nav-micro">
						<ul className="micro-list">
							<li className="subnav micro-pro-header-policy-column conditional has-arrow format-s pos-alpha">
								<a
									href="www.politico.com"
									className="subnav-toggle"
								>
									Policy
								</a>
								<div className="subnav-content">
									<ul className="micro-sublist">
										<li>
											<a
												href="https://www.politicopro.com/agriculture"
												target="_top"
											>
												Agriculture
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/budget"
												target="_top"
											>
												Budget &amp; Appropriations
												Brief
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/campaigns"
												target="_top"
											>
												Campaigns
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/cybersecurity"
												target="_top"
											>
												Cybersecurity{' '}
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/defense"
												target="_top"
											>
												Defense
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/education"
												target="_top"
											>
												Education
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/ehealth"
												target="_top"
											>
												eHealth
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/employment"
												target="_top"
											>
												Employment &amp; Immigration
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/energy"
												target="_top"
											>
												Energy
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/europe-brief"
												target="_top"
												className="politico-auth auth-logged-in"
											>
												Europe Brief
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/financialservices"
												target="_top"
											>
												Financial Services
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/healthcare"
												target="_top"
												className="is-not-subscribed"
											>
												Health Care
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tax"
												target="_top"
											>
												Tax
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tech"
												target="_top"
											>
												Technology
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/trade"
												target="_top"
											>
												Trade
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/transportation"
												target="_top"
											>
												Transportation{' '}
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="subnav micro-pro-header-states has-arrow format-s pos-alpha">
								<a
									href="www.politico.com"
									className="subnav-toggle"
								>
									States
								</a>
								<div className="subnav-content">
									<ul className="micro-sublist">
										<li>
											<a
												href="https://www.politicopro.com/states/florida"
												target="_top"
												className="is-not-subscribed"
											>
												POLITICO Florida
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/states/new-jersey"
												target="_top"
												className="is-not-subscribed"
											>
												POLITICO New Jersey
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/states/new-york"
												target="_top"
												className="is-not-subscribed"
											>
												POLITICO New York
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="subnav micro-pro-header-newsletter-column conditional has-arrow format-s pos-alpha">
								<a
									href="www.politico.com"
									className="subnav-toggle"
								>
									Newsletters
								</a>
								<div className="subnav-content">
									<ul className="micro-sublist">
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/ceo-report"
												target="_top"
											>
												CEO Report
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/day-ahead"
												target="_top"
											>
												Day Ahead
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/politico-influence"
												target="_top"
											>
												POLITICO Influence
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/tipsheets/pro-report"
												target="_top"
											>
												Pro Report
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="subnav micro-pro-header-tools-column conditional has-arrow format-s pos-alpha">
								<a
									href="www.politico.com"
									className="subnav-toggle"
								>
									Tools
								</a>
								<div className="subnav-content">
									<ul className="micro-sublist">
										<li>
											<a
												href="https://www.politicopro.com/datapoint"
												target="_top"
											>
												DataPoint
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/fiscal-2018-appropriations-watch"
												target="_top"
											>
												Fiscal 2018 Appropriations Watch
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/campaigns/dashboard"
												target="_top"
											>
												Campaign Pro Race Dashboard
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/defense-program-watch"
												target="_top"
											>
												Defense Program Watch
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/document-drawer"
												target="_top"
											>
												Document Drawer
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/energy/regulation-watch"
												target="_top"
											>
												Energy Regulation Watch
											</a>
										</li>
										<li>
											<a href="https://www.politicopro.com/calendar">
												My Calendar
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/pro-tax-watch"
												target="_top"
											>
												Pro Tax Watch
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/education/tracker"
												target="_top"
												className="politico-auth auth-logged-in"
											>
												State Education Watch
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="subnav micro-pro-header-congressional-directory-column conditional pos-beta">
								<a
									href="https://cd.politicopro.com/"
									target="_top"
								>
									Congressional Directory
								</a>
							</li>
							<li className="subnav micro-pro-header-legislative-compass">
								<a
									href="https://www.politicopro.com/legislative-compass/legislation-search"
									target="_top"
								>
									Legislative Compass
								</a>
							</li>
							<li className="subnav micro-pro-header-customize-settings-column">
								<a
									href="https://www.politicopro.com/settings"
									className="politico-auth auth-logged-in"
									target="_top"
								>
									Customize Settings
								</a>
							</li>
							<li className="subnav micro-pro-header-search-column format-m pos-beta">
								<a
									href="https://www.politicopro.com/search"
									className="politico-auth auth-logged-in"
									target="_top"
								>
									<b
										aria-hidden="true"
										className="icon icon-search"
									/>
									<span className="icon-text">Search</span>
								</a>
							</li>
							<li className="subnav micro-pro-header-settings-column format-s pos-beta">
								<a
									href="www.politico.com"
									className="subnav-toggle"
								>
									<b
										aria-hidden="true"
										className="icon icon-logged-in"
									/>
									<span className="icon-text">Settings</span>
								</a>
								<div className="subnav-content">
									<ul className="micro-sublist">
										<li>
											<a
												href="https://www.politicopro.com/settings"
												target="_top"
											>
												Manage Profile
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/settings"
												target="_top"
											>
												Customize Settings
											</a>
										</li>
										<li>
											<a
												href="https://www.politicopro.com/member/support"
												target="_top"
											>
												Support
											</a>
										</li>
										<li>
											<a
												href="https://login.politico.com/_logout?base=https%3A%2F%2Fwww.politicopro.com&amp;redirect=/_logout&amp;js=false"
												className="politico-auth auth-log-out auth-logged-in"
												data-logout="https://login.politico.com/_logout?base=https%3A%2F%2Fwww.politicopro.com&amp;redirect=/_logout"
											>
												Log Out
											</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}

export default Header
