import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { verticalScale } from '@/util';
import { Button, CustomText, Input } from '@/components';

type Props = {
	onContinue: () => void;
};

export const NameStep: React.FC<Props> = ({ onContinue }) => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<CustomText weight="600" style={styles.title}>
					My first name is
				</CustomText>
				<Input placeholder="Enter name" />
				<CustomText style={styles.description} weight="500">
					This is how it will appear in Tinder and you will not be able to change it
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
});
