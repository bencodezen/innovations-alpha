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
					<Text style={styles.value}>
						Contract Type: Fixed Price Point
					</Text>
					<Text style={styles.value}>Est. Value: $1,500,000</Text>
					<Text style={styles.awardDate}>
						Est. Award Date: 09/30/2017
					</Text>
					<Text style={styles.daysAgo}>4 days ago</Text>
					<Text style={styles.description}>
						The Department of Health and Human Services (DHHS) has a
						continuing requirement for Program Management support,
						training services, development and software support
						services for a centrally managed health program
						conducted from the Wellness Division (WS), Plans,
						Policies and Operations (PP&O)
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	daysAgo: {
		fontSize: 12,
		marginTop: 10,
		marginBottom: 16
	},
	department: {
		marginBottom: 16
	},
	description: {
		marginBottom: 20
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
