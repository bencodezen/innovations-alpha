import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<header className="sub-header on-dark bgc--vulcan-gray25">
				<div className="sub-header__pos1">
					<h2 className="sub-header__title">
						<a href="/">Opportunity Intelligence</a>
					</h2>
				</div>
				<div className="sub-header__pos2">
					<ul className="sub-header__list sub-header__list--buttons">
						<li className="sub-header__item">
							<a className="button--standard button--denim-blue">
								<b className="fa fa-search" /> Search
							</a>
						</li>
						<li className="sub-header__item">
							<a className="button--standard button--denim-blue">
								<b className="fa fa-bell" /> Alerts
							</a>
						</li>
						<li className="sub-header__item">
							<a className="button--standard button--denim-blue">
								<b className="fa fa-cog" /> Preferences
							</a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}

export default Header
