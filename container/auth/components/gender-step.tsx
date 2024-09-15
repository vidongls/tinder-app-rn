import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { verticalScale } from '@/util';
import { Button, ButtonSelect, CustomText, Input } from '@/components';

type Props = {
	onContinue: () => void;
};

export const GenderStep: React.FC<Props> = ({ onContinue }) => {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.box}>
					<CustomText weight="600" style={styles.title}>
						I am a
					</CustomText>
				</View>
				<View style={styles.center}>
					<ButtonSelect title="Male" style={{ marginBottom: 20, width: '100%' }} isActive />
					<ButtonSelect title="Female" style={{ width: '100%' }} />
				</View>
			</View>
			<Button title="Continue" onPress={onContinue} style={styles.button} />
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		marginHorizontal: verticalScale(40),
		justifyContent: 'space-between',
		flex: 1,
	},
	title: {
		fontSize: verticalScale(38),
		lineHeight: verticalScale(54),
		width: verticalScale(151),
		marginBottom: verticalScale(42),
	},
	box: {
		marginLeft: verticalScale(40),
	},
	description: {
		marginTop: 12,
		fontSize: verticalScale(14),
		lineHeight: verticalScale(17),
		color: '#828693',
		marginBottom: 40,
	},
	button: {
		marginTop: 0,
	},
});
