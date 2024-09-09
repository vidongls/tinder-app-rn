import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { verticalScale } from '@/util';

interface ButtonProps {
	title: string;
	onPress?: () => void;
	style?: ViewStyle;
	textStyle?: TextStyle;
	type?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, type = 'primary' }) => {
	const isPrimary = type === 'primary';

	return (
		<View style={[isPrimary && styles.shadow, style]}>
			<TouchableOpacity onPress={onPress} style={[styles.button, !isPrimary && styles.outlineButton]}>
				{isPrimary ? (
					<LinearGradient
						colors={['#EA4080', '#EE805F']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.gradient}
					>
						<Text style={[styles.text, textStyle]}>{title}</Text>
					</LinearGradient>
				) : (
					<Text style={[styles.text, textStyle]}>{title}</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: verticalScale(100),
		height: verticalScale(50),
	},
	gradient: {
		paddingVertical: verticalScale(14),
		paddingHorizontal: verticalScale(30),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: verticalScale(100),
	},
	text: {
		color: 'white',
		fontSize: verticalScale(16),
		lineHeight: verticalScale(18),
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	outlineButton: {
		borderWidth: 2,
		borderColor: '#FFFFFF',
		paddingVertical: verticalScale(14),
		paddingHorizontal: verticalScale(30),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: verticalScale(100),
	},
	shadow: {
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.15,
		shadowRadius: 5,
		elevation: 5,
		borderRadius: verticalScale(100),
	},
});
