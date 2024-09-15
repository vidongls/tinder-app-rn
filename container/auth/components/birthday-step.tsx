import { Button, CustomText, InputDate } from '@/components';
import { verticalScale } from '@/util';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
	onContinue: () => void;
};

export const BirthdayStep: React.FC<Props> = ({ onContinue }) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<CustomText weight="600" style={styles.title}>
					My birthday is
				</CustomText>
				<InputDate />
				<CustomText style={styles.description} weight="500">
					Your age will be public
				</CustomText>
			</View>
			<Button title="Continue" onPress={onContinue} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginHorizontal: verticalScale(40),
	},
	title: {
		fontSize: verticalScale(38),
		lineHeight: verticalScale(54),
		width: verticalScale(197),
		marginBottom: verticalScale(42),
	},
	box: {
		marginLeft: verticalScale(40),
	},
	description: {
		marginTop: 12,
		fontSize: 14,
		lineHeight: 17,
		color: '#828693',
		marginBottom: 40,
	},
});
