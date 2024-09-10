import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface CustomTextProps extends TextProps {
	weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
	children: React.ReactNode;
}

const fontMap: { [key: string]: string } = {
	'100': 'Inter-Thin',
	'200': 'Inter-ExtraLight',
	'300': 'Inter-Light',
	'400': 'Inter-Regular',
	'500': 'Inter-Medium',
	'600': 'Inter-SemiBold',
	'700': 'Inter-Bold',
	'800': 'Inter-ExtraBold',
	'900': 'Inter-Black',
};

export const CustomText: React.FC<CustomTextProps> = ({ weight = '400', style, children, ...props }) => {
	const fontFamily = fontMap[weight];

	return (
		<Text style={[styles.text, style, { fontFamily }]} {...props}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
	},
});
