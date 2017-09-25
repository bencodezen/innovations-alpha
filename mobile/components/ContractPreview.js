import React, { Component } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

class ContractPreview extends Component {
	render() {
		const {
			awardDate,
			daysAgo,
			department,
			logo,
			title,
			value
		} = this.props

		return (
			<View style={styles.container}>
				<Image source={{ uri: logo }} />
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.department}>{department}</Text>
				<Text style={styles.value}>Est. Value: {value}</Text>
				<Text style={styles.awardDate}>
					Est. Award Date: {awardDate}
				</Text>
				<Text style={styles.daysAgo}>{daysAgo} days ago</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	title: {
		fontWeight: 'bold',
		color: '#0A7CC4',
		fontSize: 15,
		marginBottom: 5
	}
})

export default ContractPreview
