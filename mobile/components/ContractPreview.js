import React, { Component } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class ContractPreview extends Component {
	render() {
		const {
			awardDate,
			contractType,
			daysAgo,
			department,
			iconName,
			iconColor,
			logo,
			navigate,
			title,
			value
		} = this.props

		return (
			<View style={styles.container}>
				<View>
					<Image source={{ uri: logo }} />
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.department}>{department}</Text>
					<Text style={styles.value}>
						Contract Type: {contractType}
					</Text>
					<Text style={styles.value}>Est. Value: {value}</Text>
					<Text style={styles.awardDate}>
						Est. Award Date: {awardDate}
					</Text>
					<Text style={styles.daysAgo}>{daysAgo} days ago</Text>
				</View>
				<View>
					<Ionicons
						name={iconName ? iconName : 'md-add'}
						size={28}
						style={{
							marginBottom: -3,
							fontWeight: 'bold',
							color: iconColor ? iconColor : '#222'
						}}
						color={'#222'}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	awardDate: {
		fontSize: 13,
		marginBottom: 10
	},
	container: {
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	daysAgo: {
		fontSize: 12
	},
	department: {
		fontSize: 14,
		marginBottom: 10
	},
	title: {
		color: '#0A7CC4',
		fontSize: 15,
		marginBottom: 3
	},
	value: {
		fontSize: 13
	}
})

export default ContractPreview
