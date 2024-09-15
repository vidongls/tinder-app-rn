import { verticalScale } from '@/util';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const Logo = () => {
	return <Image source={require('@/assets/images/logo.png')} style={styles.image} />;
};

const styles = StyleSheet.create({
	image: {
		width: verticalScale(190),
		height: verticalScale(45),
		objectFit: 'cover',
	},
});
