import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import HomeScreen from '../screens/HomeScreen'
import ContractsScreen from '../screens/ContractsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SearchScreen from '../screens/SearchScreen'

export default TabNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Contracts: {
			screen: ContractsScreen
		},
		Search: {
			screen: SearchScreen
		},
		Favorites: {
			screen: FavoritesScreen
		},
		Settings: {
			screen: SettingsScreen
		}
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state
				let iconName
				switch (routeName) {
					case 'Home':
						iconName =
							Platform.OS === 'ios'
								? `ios-home${focused ? '' : '-outline'}`
								: 'md-information-circle'
						break
					case 'Contracts':
						iconName =
							Platform.OS === 'ios'
								? `ios-document${focused ? '' : '-outline'}`
								: 'md-link'
						break
					case 'Search':
						iconName =
							Platform.OS === 'ios'
								? `ios-search${focused ? '' : '-outline'}`
								: 'md-link'
						break
					case 'Favorites':
						iconName =
							Platform.OS === 'ios'
								? `ios-heart${focused ? '' : '-outline'}`
								: 'md-link'
						break
					case 'Settings':
						iconName =
							Platform.OS === 'ios'
								? `ios-settings${focused ? '' : '-outline'}`
								: 'md-options'
				}
				return (
					<Ionicons
						name={iconName}
						size={28}
						style={{ marginBottom: -3 }}
						color={
							focused ? (
								Colors.tabIconSelected
							) : (
								Colors.tabIconDefault
							)
						}
					/>
				)
			}
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false
	}
)
