import React, { Component } from 'react'
import Article from './Article'
import '../styles/pronews.css'

class ProNews extends Component {
	render() {
		return (
			<div className="content-group widget caste-exclusive">
				<h3 className="fz6 mb20">POLITICO Pro News</h3>
				<section className="jobs-box jobs-box--full-width">
					<Article
						date="Sep 13, 2017 - 10:04 AM"
						title="Congress passes bill to increase agriculture spending by $100B"
						author="By Jane Smith"
						tease="The FDA wants to provide farmers and states more time to help the agency rework the new water standards for produce, one of the most controversial parts of the Food Safety Modernization Act regulations."
					/>
					<Article
						date="Sep 10, 2017 - 1:04 PM"
						title="House of Representatives cut education funding by $10M"
						author="By Rachel Johnson"
						tease="The adminstrations's proposal includes cuts to federal aid programs and increased funding for school choice. The administration's new budget, released Thursday, follows through on this promise by slashing funds for the Education Department by 13.5 percent."
					/>
					<Article
						date="Sep 3, 2017 - 8:28 AM"
						title="Senate backs massive increase in defense spending"
						author="By Patricia Williams"
						tease="The Senate passed its version of a massive annual defense bill on Friday, leaving out controversial amendments on transgender troops and climate policy but backing President Trump's desire for a bigger, stronger military."
					/>
				</section>
			</div>
		)
	}
}

export default ProNews
