import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<header className="lc-header">
				<div className="super-inner df jc-sb ai-c">
					<h1 className="dtc--m">
						<a href="/legislative-compass/legislation-search">
							Opportunity Intelligence
						</a>
					</h1>
					<div className="dtc--m va-m tar--m whs-nw pt1 pt0--m">
						<a
							className="button--shuttlegray mr10"
							href="/legislative-compass/legislation-search"
						>
							<b
								className="icon icon-search"
								aria-hidden="true"
							/>{' '}
							<span className="d-n di--s">Search</span>
						</a>
						<a
							className="button--shuttlegray mr10"
							href="/legislative-compass/roll-call-vote-search"
						>
							<b
								className="icon icon-person"
								aria-hidden="true"
							/>{' '}
							<span className="d-n di--xs">Profile</span>
						</a>
						<a
							className="button--shuttlegray"
							href="/legislative-compass/preferences"
						>
							<b
								className="icon icon-gear"
								aria-hidden="true"
							/>{' '}
							<span className="d-n di--xs"> Preferences</span>
						</a>
					</div>
				</div>
			</header>
		)
	}
}

export default Header
