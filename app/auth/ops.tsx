import { Button, CustomText } from '@/components';
import { verticalScale } from '@/util';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AuthOps = () => {
	const router = useRouter();

	const { type } = useLocalSearchParams();
	return (
		<View style={styles.container}>
			<CustomText style={styles.title} weight="700">
				Oops!
			</CustomText>
			<CustomText style={styles.description}>
				We couldn’t find a Tinder account {'\n'} connected to that{' '}
				<CustomText style={{ textTransform: 'capitalize' }}>{type}</CustomText> {'\n'} Account.
			</CustomText>

			<Button title="CREATE NEW ACCOUNT" onPress={() => router.push('/auth/finish-info-account')} />
		</View>
	);
};

export default AuthOps;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: verticalScale(32),
	},
	title: {
		color: '#444142',
		fontSize: verticalScale(30),
		lineHeight: verticalScale(36),
		marginBottom: verticalScale(52),
	},
	description: {
		color: '#828693',
		textAlign: 'center',
		fontSize: verticalScale(19),
		lineHeight: verticalScale(25),
		marginBottom: verticalScale(134),
	},
});
