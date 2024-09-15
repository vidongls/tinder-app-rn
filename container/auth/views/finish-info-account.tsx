import React, { useState } from 'react';
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	SafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { BirthdayStep, GenderStep, HeaderInfoAccount, NameStep } from '../components';

export const AuthFinishAccountInfoContainer = () => {
	const [step, setStep] = useState(0);

	const onContinue = () => {
		setStep(step + 1);
	};

	const steps = [
		{
			name: 'Name',
			component: <NameStep onContinue={onContinue} />,
		},
		{
			name: 'Birthday',
			component: <BirthdayStep onContinue={onContinue} />,
		},
		{
			name: 'Gender',
			component: <GenderStep onContinue={onContinue} />,
		},
	];

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.appContainer}>
				<SafeAreaView style={{ flex: 1 }}>
					<HeaderInfoAccount step={step} setStep={setStep} steps={steps} />
					{steps[step].component}
				</SafeAreaView>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: '#ffffff',
		flex: 1,
	},
	container: {
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		marginBottom: 20,
	},
	input: {
		width: '100%',
		padding: 10,
		borderWidth: 1,
		marginBottom: 20,
	},
});
