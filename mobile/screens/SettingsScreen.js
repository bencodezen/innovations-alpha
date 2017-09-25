import React from 'react'
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Switch,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { WebBrowser } from 'expo'
import Header from '../components/Header'
import ContractPreview from '../components/ContractPreview'
import Color from '../styles/Color'

import { MonoText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<ScrollView>
					<View
						style={{
							paddingRight: 30,
							paddingLeft: 30,
							flex: 1,
							backgroundColor: 'transparent'
						}}
					>
						<View style={{ marginBottom: 30, marginTop: 30 }}>
							<Text style={{ fontSize: 18 }}>
								<Text style={{ fontWeight: '600' }}>
									Based on your current Pro Account settings
								</Text>, you will receive notifications for the
								following:
							</Text>
						</View>

						<View style={{ marginBottom: 15 }}>
							<View style={{ marginBottom: 15 }}>
								<View style={styles.preferenceStyle}>
									<View style={{ flex: 1, paddingRight: 5 }}>
										<Text
											style={{
												fontSize: 20,
												fontWeight: '600'
											}}
										>
											Email
										</Text>
										<Text style={{ fontSize: 16 }}>
											Manage your email notifications
										</Text>
									</View>
									<View>
										<Switch
											value={true}
											onTintColor="#015DA6"
										/>
									</View>
								</View>
							</View>
						</View>
						<View style={{ marginBottom: 15 }}>
							<View style={{ marginBottom: 15 }}>
								<View style={styles.preferenceStyle}>
									<View style={{ flex: 1, paddingRight: 5 }}>
										<Text
											style={{
												fontSize: 20,
												fontWeight: '600'
											}}
										>
											Mobile Push Notifications
										</Text>
										<Text style={{ fontSize: 16 }}>
											Manage your push notifications on
											your mobile device
										</Text>
									</View>
									<View>
										<Switch
											value={true}
											onTintColor="#015DA6"
										/>
									</View>
								</View>
							</View>
						</View>
						<View style={{ marginBottom: 15 }}>
							<View style={{ marginBottom: 15 }}>
								<View style={styles.preferenceStyle}>
									<View style={{ flex: 1, paddingRight: 5 }}>
										<Text
											style={{
												fontSize: 20,
												fontWeight: '600'
											}}
										>
											Desktop Push Notifications
										</Text>
										<Text style={{ fontSize: 16 }}>
											Manage your desktop push
											notifications
										</Text>
									</View>
									<View>
										<Switch
											value={true}
											onTintColor="#015DA6"
										/>
									</View>
								</View>
							</View>
						</View>
						<Text>
							Visit{' '}
							<Text
								style={{ color: Color.BLUE }}
								onPress={() =>
									Linking.openURL(
										`${this.props.config
											.proDomain}/settings`
									)}
							>
								Pro Account Settings
							</Text>{' '}
							to edit my customized settings
						</Text>
					</View>
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
	},
	preferenceStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		marginBottom: 10
	}
})
