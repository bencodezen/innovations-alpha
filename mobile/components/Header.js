import React from 'react'
import {
	Platform,
	StyleSheet,
	StatusBar,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Color from '../styles/Color'
import ProLogo from './ProLogo'

const Header = ({ navigate, showTabs = true, title }) => {
	const {
		hamburgerContainerStyle,
		hamburgerStyle,
		leftSlotPlaceholderStyle,
		tabIconStyle,
		tabRowStyle,
		tabStyle,
		titleRowStyle,
		titleStyle,
		toolbarStyle,
		topHeaderBarStyle
	} = styles

	const allTopicsBorderColor =
		title === 'All Topics' ? Color.WHITE : Color.RED
	const myProBorderColor = title === 'My Pro' ? Color.WHITE : Color.RED
	const toolbarHeight = 75

	return (
		<View style={[toolbarStyle, { height: toolbarHeight }]}>
			<View style={topHeaderBarStyle} />
			<StatusBar barStyle="light-content" />
			<View style={titleRowStyle}>
				<View style={leftSlotPlaceholderStyle} />
				<View style={styles.centerPlaceholderStyle}>
					<ProLogo />
				</View>
				<TouchableOpacity onPress={() => navigate('DrawerOpen')}>
					<View style={hamburgerContainerStyle}>
						<FontAwesome style={hamburgerStyle} name="bars" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	hamburgerContainerStyle: {
		padding: 10
	},
	hamburgerStyle: {
		color: '#e5e5e5',
		fontSize: 17
	},
	leftSlotPlaceholderStyle: {
		height: 20,
		backgroundColor: 'transparent',
		width: 20
	},
	centerPlaceholderStyle: {
		flex: 1,
		alignItems: 'center'
	},
	tabIconStyle: {
		color: Color.WHITE,
		fontSize: 20
	},
	tabRowStyle: {
		flexDirection: 'row',
		zIndex: 0
	},
	tabStyle: {
		flex: 1,
		alignItems: 'center',
		borderBottomWidth: 3,
		paddingBottom: 5,
		paddingTop: 5
	},
	titleStyle: {
		textAlign: 'center',
		color: '#e5e5e5',
		flex: 10,
		fontSize: 18
	},
	titleRowStyle: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		height: 50,
		zIndex: 1,
		flex: 1
	},
	toolbarStyle: {
		paddingTop: 5,
		backgroundColor: Color.BLACK,
		alignSelf: 'stretch',
		zIndex: 1
	},
	topHeaderBarStyle: {
		backgroundColor: Color.BLACK,
		alignSelf: 'stretch',
		...Platform.select({
			android: {
				height: 25
			},
			ios: {
				height: 20
			}
		})
	}
})

export default Header
