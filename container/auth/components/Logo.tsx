import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { verticalScale } from '@/util';

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
