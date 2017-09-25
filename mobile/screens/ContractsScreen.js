import React from 'react'
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { WebBrowser } from 'expo'
import Header from '../components/Header'
import ContractPreview from '../components/ContractPreview'
import Subcontractor from '../components/Subcontractor'

import { MonoText } from '../components/StyledText'

export default class ContractsScreen extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
		const { navigate } = this.props.navigation

		return (
			<View style={styles.container}>
				<Header navigate={navigate} />
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}
				>
					<View style={styles.h3Container}>
						<Text style={styles.h3}>
							Community Development Software Solution
						</Text>
					</View>
					<Text style={styles.department}>
						Department of Health and Human Services
					</Text>
					<Text style={styles.value}>Est. Value: $1,500,000</Text>
					<Text style={styles.awardDate}>
						Est. Award Date: 09/30/2017
					</Text>
					<Text style={styles.daysAgo}>4 days ago</Text>
					<Text>
						The United States Marine Corps (USMC) has a continuing
						requirement for Program Management support, training
						services, Human Resources Services and non-guard
						security support services for a centrally managed law
						enforcement program conducted from the Security Division
						(PS), Plans, Policies and Operations (PP&O),
						Headquarters, U.S. Marine Corps
					</Text>
					<View style={styles.h3Container}>
						<Text style={styles.h3}>
							Recommended Subcontractors
						</Text>
					</View>
					<Subcontractor
						company="Small Business Sally"
						email="info@smallbusinesssally.com"
					/>
					<Subcontractor
						company="Medium Business Molly"
						email="info@mediumbusinessmolly.com"
					/>
					<Subcontractor
						company="Tiny Business Tim"
						email="info@tinybusinesstim.com"
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
		fontWeight: 'bold'
	},
	h3Container: {
		marginBottom: 5
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
