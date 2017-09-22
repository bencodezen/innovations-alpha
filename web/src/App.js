import React, { Component } from 'react'
import GlobalHeader from './components/GlobalHeader'
import Footer from './components/Footer'
import Header from './components/Header'
import Subheader from './components/Subheader'
import logo from './logo.svg'
import './App.css'
import './styles/lc.css'
import './styles/style-pro.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalHeader />
				<Header />
				<Subheader />
				<Footer />
			</div>
		)
	}
}

export default App
