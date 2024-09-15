import { verticalScale } from '@/util';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type Props = {
	step: number;
	setStep: (step: number) => void;
	steps: {
		name: string;
		component: JSX.Element;
	}[];
};

export const HeaderInfoAccount: React.FC<Props> = ({ setStep, step, steps }) => {
	const router = useRouter();

	return (
		<View>
			<View style={styles.progressBarContainer}>
				{steps.map((_, idx) => (
					<View
						key={idx}
						style={[styles.progressStep, { backgroundColor: idx <= step ? '#EA4080' : '#D9D9D9' }]}
					/>
				))}
			</View>
			<View style={styles.navigationContainer}>
				{step === 0 && (
					<TouchableOpacity onPress={() => router.push('/auth')}>
						<Entypo name="chevron-left" size={30} color="#828693" style={styles.iconBack} />
					</TouchableOpacity>
				)}
				{step > 0 && (
					<TouchableOpacity onPress={() => setStep(step - 1)}>
						<Entypo name="chevron-left" size={30} color="#828693" style={styles.iconBack} />
					</TouchableOpacity>
				)}
				{/* {step < 4 && <TouchableOpacity onPress={() => setStep(step + 1)}></TouchableOpacity>} */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	progressBarContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
	},
	progressStep: {
		width: `${100 / 3}%`,
		backgroundColor: '#EA4080',
		height: 5,
	},
	navigationContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginTop: 20,
		marginBottom: 16,
	},
	iconBack: {},
});
