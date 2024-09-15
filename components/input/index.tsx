import { verticalScale } from '@/util';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputProps {
	placeholder?: string;
	placeholderTextColor?: string;
	style?: object;
}

export const Input = ({
	placeholder = 'Type',
	placeholderTextColor = '#C6C5C7',
	style = styles.input,
	...rest
}: InputProps) => {
	return <TextInput style={style} placeholder={placeholder} placeholderTextColor={placeholderTextColor} {...rest} />;
};

const styles = StyleSheet.create({
	input: {
		paddingBottom: 8,
		borderBottomWidth: 2,
		borderBottomColor: '#828693',
		color: '#5D5B5D',
		fontSize: verticalScale(20),
		height: 44,
	},
});
