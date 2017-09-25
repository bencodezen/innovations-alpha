import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Subcontractor = ({ company, email }) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<FontAwesome
					name="user-circle"
					size={28}
					style={{
						marginBottom: -3,
						fontWeight: 'bold'
					}}
					color={'#222'}
				/>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.company}>{company}</Text>
				<Text style={styles.email}>{email}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	company: {
		fontWeight: 'bold',
		marginBottom: 2
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	email: {
		fontSize: 14,
		color: '#0A7CC4'
	},
	iconContainer: {
		padding: 15,
		paddingLeft: 0
	},
	infoContainer: {
		flex: 1
	}
})

export default Subcontractor
