import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<nav className="footer__group footer__group--links">
					<ul>
						<li>
							<a href="www.politicopro.com">Terms of Service</a>
						</li>
						<li>
							<a href="www.politicopro.com">Privacy Policy</a>
						</li>
						<li>
							<a href="www.politicopro.com">About Us</a>
						</li>
						<li>
							<a href="www.politicopro.com">Correction</a>
						</li>
						<li>
							<a href="www.politicopro.com">Support</a>
						</li>
					</ul>
				</nav>
				<div className="footer__group footer__group--legal">
					<p className="footer__copyright"> © 2017 POLITICO LLC</p>
				</div>
			</footer>
		)
	}
}

export default Footer
