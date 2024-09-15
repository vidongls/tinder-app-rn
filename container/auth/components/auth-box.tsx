import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { verticalScale } from '@/util';
import { Button } from '@/components';
import { useRouter } from 'expo-router';

export const AuthBox = () => {
	const router = useRouter();

	return (
		<View style={styles.box}>
			<Text style={styles.text}>
				By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in our
				Privacy Policy and Cookies Policy.
			</Text>
			<View style={styles.boxButton}>
				<Button title="SIGN IN WITH APPLE" type="outline" onPress={() => router.push('/auth/ops?type=apple')} />
				<Button
					title="SIGN IN WITH FACEBOOK"
					type="outline"
					onPress={() => router.push('/auth/ops?type=facebook')}
				/>
				<Button
					title="SIGN IN WITH PHONE NUMBER"
					type="outline"
					onPress={() => router.push('/auth/ops?type=phone')}
				/>
			</View>
			<TouchableOpacity>
				<Text style={styles.textSignIn}>Trouble Signing In?</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		marginTop: verticalScale(87),
	},
	text: {
		fontSize: verticalScale(12),
		lineHeight: verticalScale(17),
		marginBottom: verticalScale(27),
		textAlign: 'center',
		color: '#FFFFFF',
	},
	boxButton: {
		flexDirection: 'column',
		gap: verticalScale(11),
	},
	textSignIn: {
		fontSize: verticalScale(14),
		lineHeight: verticalScale(17),
		textAlign: 'center',
		color: '#FFFFFF',
		marginTop: verticalScale(20),
	},
});
