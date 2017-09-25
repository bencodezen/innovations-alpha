import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
			<header
				className="header on-dark bgc--vulcan-gray13"
				id="js-top-header"
			>
				<div className="header__row header__main">
					<div className="header__branding">
						<h1>
							<a href="/">
								<b
									aria-hidden="true"
									className="icon icon-politico is-emphasized"
								/>{' '}
								<b
									aria-hidden="true"
									className="icon icon-pro-small"
								/>
								<span className="icon-text">POLITICO Pro</span>
							</a>
						</h1>
					</div>
					<div className="header__content">
						<div className="header__left">
							<button className="hamburger" id="toggle">
								<span>
									<span className="icon-text">
										Master Menu
									</span>
								</span>
							</button>
						</div>
						<div className="header__right">
							<div className="actions-lineup">
								<ul className="actions-lineup__list">
									<li className="actions-lineup__item hide-at-mobile icon-flip">
										<a href="/">
											<b className="icon icon--user" />
											<span className="icon-text">
												Hi Sally
											</span>
										</a>
									</li>
									<li className="actions-lineup__item hide-at-mobile">
										<a href="/">
											<b className="fa fa-user" />
											<span className="icon-text">
												Profile
											</span>
										</a>
									</li>
									<li className="actions-lineup__item">
										<div className="slide-search">
											<a
												className="slide-search__open"
												id="search-open"
												href="/"
											>
												<b className="fa fa-search" />
												<span className="icon-text">
													Search
												</span>
											</a>
											<div
												className="slide-search__content bgc--vulcan-gray13"
												id="search-input"
											>
												<form
													className="slide-search__form"
													action="/"
													method="get"
												>
													<input
														className="slide-search__input"
														type="search"
														id="searchTerm"
														placeholder="SEARCH"
													/>
													<button
														className="slide-search__run"
														type="submit"
													>
														<b className="icon icon--search" />
														<span className="icon-text">
															Search
														</span>
													</button>
													<button
														className="slide-search__close"
														id="search-close"
														type="button"
													>
														<b className="icon icon--close" />
														<span className="icon-text">
															Search
														</span>
													</button>
												</form>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header
