import React from 'react'
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { WebBrowser } from 'expo'
import Header from '../components/Header'
import ContractPreview from '../components/ContractPreview'

import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
				>
					<Text style={styles.h3}>Search</Text>
					<TextInput style={styles.searchBar} value="technology" />
					<ContractPreview
						awardDate="09/30/2017"
						daysAgo="4"
						department="Department of Health and Human Services"
						logo="https://www.hhs.gov/sites/default/files/hhs-emblem-black.gif"
						rating="90%"
						title="Community Development Software Solution"
						value="$1,500,000"
					/>
					<ContractPreview
						awardDate="09/30/2017"
						daysAgo="12"
						department="National Cancer Institute"
						logo="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0001/0943/brand.gif?itok=H7JqnZzc"
						rating="87%"
						title="Mobile Application Development"
						value="$750,000"
					/>
					<ContractPreview
						awardDate="09/30/2017"
						daysAgo="3"
						department="Department of Labor"
						logo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_the_United_States_Department_of_Labor.svg/1200px-Seal_of_the_United_States_Department_of_Labor.svg.png"
						rating="84%"
						title="Service Plan for IT Infrastructure"
						value="$2,400,000"
					/>
					<ContractPreview
						awardDate="09/30/2017"
						daysAgo="7"
						department="Department of Energy"
						logo="https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_United_States_Department_of_Energy.svg"
						rating="81%"
						title="Website Redesign"
						value="$800,000"
					/>
				</ScrollView>
			</View>
		)
	}

	_maybeRenderDevelopmentModeWarning() {
		if (__DEV__) {
			const learnMoreButton = (
				<Text
					onPress={this._handleLearnMorePress}
					style={styles.helpLinkText}
				>
					Learn more
				</Text>
			)

			return (
				<Text style={styles.developmentModeText}>
					Development mode is enabled, your app will be slower but you
					can use useful development tools. {learnMoreButton}
				</Text>
			)
		} else {
			return (
				<Text style={styles.developmentModeText}>
					You are not in development mode, your app will run at full
					speed.
				</Text>
			)
		}
	}

	_handleLearnMorePress = () => {
		WebBrowser.openBrowserAsync(
			'https://docs.expo.io/versions/latest/guides/development-mode'
		)
	}

	_handleHelpPress = () => {
		WebBrowser.openBrowserAsync(
			'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	h3: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center'
	},
	contentContainer: {
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	},
	searchBar: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 8
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50
	},
	homeScreenFilename: {
		marginVertical: 7
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)'
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center'
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center'
	},
	navigationFilename: {
		marginTop: 5
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	},
	helpLink: {
		paddingVertical: 15
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7'
	}
})
