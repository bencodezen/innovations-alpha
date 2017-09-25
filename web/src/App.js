import React, { Component } from 'react'
import GlobalHeader from './components/GlobalHeader'
import Footer from './components/Footer'
import Header from './components/Header'
import Subheader from './components/Subheader'
import Main from './components/Main'
import './App.css'
import './styles/lc.css'
import './styles/style-pro.css'
import './styles/glassdoor.css'
import './styles/linkedin.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalHeader />
				<Header />
				<Subheader />
				<Main />
				<Footer />
			</div>
		)
	}
}

export default App
