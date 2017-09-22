import React, { Component } from 'react'
import GlobalHeader from './components/GlobalHeader'
import Footer from './components/Footer'
import Header from './components/Header'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalHeader />
				<Header />
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload.
				</p>
				<Footer />
			</div>
		)
	}
}

export default App
