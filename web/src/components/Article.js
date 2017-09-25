import React from 'react'

const Article = ({ author, date, tease, title }) => {
	return (
		<section className="pro-news">
			<p className="pro-news__date">{date}</p>
			<a href="/">
				<h4 className="pro-news__title fz6">{title}</h4>
			</a>
			<p className="pro-news__author">{author}</p>
			<p className="pro-news__tease">{tease}</p>
		</section>
	)
}

export default Article
