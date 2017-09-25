import React from 'react'
import { Image, StyleSheet } from 'react-native'

const ProLogo = ({ aspectRatio = 2 }) => {
	return (
		<Image
			source={require('../assets/images/pro-logo.png')}
			style={styles.welcomeImage}
		/>
	)
}

const styles = StyleSheet.create({
	welcomeImage: {
		width: 230,
		height: 31,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10
	}
})

export default ProLogo
