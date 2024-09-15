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
	disabled?: boolean; // Thêm thuộc tính disabled
}

export const Button: React.FC<ButtonProps> = ({
	title,
	onPress,
	style,
	textStyle,
	type = 'primary',
	disabled = false,
}) => {
	const isPrimary = type === 'primary';

	// Không cho phép nhấn nếu button đang ở trạng thái disabled
	const handlePress = () => {
		if (!disabled && onPress) {
			onPress();
		}
	};

	return (
		<View style={[isPrimary && styles.shadow, style]}>
			<TouchableOpacity
				onPress={handlePress}
				style={[styles.button, !isPrimary && styles.outlineButton, disabled && styles.disabledButton]}
				disabled={disabled} // Thêm thuộc tính disabled vào TouchableOpacity
			>
				{isPrimary && !disabled ? (
					<LinearGradient
						colors={['#EA4080', '#EE805F']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.gradient}
					>
						<Text style={[styles.text, textStyle]}>{title}</Text>
					</LinearGradient>
				) : (
					<Text style={[styles.text, textStyle, disabled && styles.disabledText]}>{title}</Text>
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
		borderWidth: 1.3,
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
	disabledButton: {
		backgroundColor: '#EBECEF',
		borderWidth: 1.3,
		borderColor: '#EBECEF',
	},
	disabledText: {
		color: '#828491',
	},
});
