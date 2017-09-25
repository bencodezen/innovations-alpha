import React from 'react'
import Dimensions from 'Dimensions'

// Get device dimensions
const x = Dimensions.get('window').width
const y = Dimensions.get('window').height

/**
 * Generates the ratio based on device width
 * @param {[Integer]} options.dimension The device dimension to base calculations on
 * @param {[Integer]} options.small     Smallest breakpoint per smallest iPhone
 * @param {[Integer]} options.medium    "Medium" breakpoint per average iPhone
 * @return {[Integer]}                  Ratio for calculation
 */
const determineRatio = ({ dimension, small, medium }) => {
	if (dimension < medium) {
		if (dimension < small) {
			return 0.75
		} else {
			return 0.875
		}
	} else {
		return 1
	}
}

// Get device ratios
const ratioX = determineRatio({ dimension: x, small: 320, medium: 375 })
const ratioY = determineRatio({ dimension: y, small: 480, medium: 568 })

// Set base font size value
const baseFontSize = 16

/**
 * Determine relatize sizes similar to ems in CSS
 * @param  {[Integer / Float]} value The desired ratio based on font-size
 * @return {[Integer / Float]}       The number of pixels
 */
const em = value => {
	return baseFontSize * value
}

// Determiner what values will be available to use in other JS files
const Style = {
	// GENERAL
	DEVICE_WIDTH: x,
	DEVICE_HEIGHT: y,
	RATIO_X: ratioX,
	RATIO_Y: ratioY,
	UNIT: em(1),
	GUTTER: em(1.25),

	// CONSTRAINTS
	MAX_TEXT_WIDTH: x - em(1.25) * 2
}

export default Style
