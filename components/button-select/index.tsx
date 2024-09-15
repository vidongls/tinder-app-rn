import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { verticalScale } from '@/util';

interface ButtonProps {
	title: string;
	onPress?: () => void;
	style?: ViewStyle;
	textStyle?: TextStyle;
	isActive?: boolean;
}

export const ButtonSelect: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, isActive }) => {
	// Không cho phép nhấn nếu button đang ở trạng thái disabled
	const handlePress = () => {
		if (onPress) {
			onPress();
		}
	};

	return (
		<View style={[style]}>
			<TouchableOpacity onPress={handlePress} style={[styles.button, isActive && styles.buttonActive]}>
				<Text style={[styles.text, isActive && styles.textActive, textStyle]}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		height: verticalScale(50),
		borderWidth: 2,
		borderColor: '#C6C5C7',
		paddingVertical: verticalScale(14),
		paddingHorizontal: verticalScale(30),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: verticalScale(100),
		color: '#C6C5C7',
	},
	text: {
		color: '#C6C5C7',
		fontSize: verticalScale(16),
		lineHeight: verticalScale(18),
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	textActive: {
		color: '#EA4080',
	},
	buttonActive: {
		borderColor: '#EA4080',
		color: '#EA4080',
	},
});
