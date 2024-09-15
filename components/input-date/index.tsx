import { verticalScale } from '@/util';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputDateProps {
	value?: string;
	onChange?: (value: string) => void;
}

export const InputDate: React.FC<InputDateProps> = ({ value = '', onChange }) => {
	const [dateValues, setDateValues] = useState<string[]>(Array(8).fill(''));
	const inputsRef = useRef<Array<TextInput | null>>([]);

	useEffect(() => {
		if (value) {
			const [year, month, day] = value.split('/');
			setDateValues([
				...year.split(''),
				...Array(4 - year.length).fill(''),
				...month.split(''),
				...Array(2 - month.length).fill(''),
				...day.split(''),
				...Array(2 - day.length).fill(''),
			]);
		}
	}, [value]);

	const handleChangeText = (text: string, index: number) => {
		const newDateValues = [...dateValues];
		newDateValues[index] = text;
		setDateValues(newDateValues);

		const year = newDateValues.slice(0, 4).join('');
		const month = newDateValues.slice(4, 6).join('');
		const day = newDateValues.slice(6, 8).join('');
		const newValue = `${year}/${month}/${day}`;

		if (onChange) {
			onChange(newValue);
		}

		if (text.length === 1 && index < 7) {
			inputsRef.current[index + 1]?.focus();
		} else if (text.length === 0 && index > 0) {
			inputsRef.current[index - 1]?.focus();
		}
	};

	return (
		<View>
			<View style={styles.dateInputContainer}>
				{[...Array(4)].map((_, i) => (
					<TextInput
						key={i}
						ref={(el) => (inputsRef.current[i] = el)}
						style={styles.input}
						value={dateValues[i]}
						onChangeText={(text) => handleChangeText(text, i)}
						placeholder="Y"
						keyboardType="numeric"
						maxLength={1}
						placeholderTextColor={'#C6C5C7'}
					/>
				))}

				<Text style={styles.separator}>/</Text>

				{[...Array(2)].map((_, i) => (
					<TextInput
						key={i + 4}
						ref={(el) => (inputsRef.current[i + 4] = el)}
						style={styles.input}
						value={dateValues[i + 4]}
						onChangeText={(text) => handleChangeText(text, i + 4)}
						placeholder="M"
						keyboardType="numeric"
						maxLength={1}
						placeholderTextColor={'#C6C5C7'}
					/>
				))}

				<Text style={styles.separator}>/</Text>

				{[...Array(2)].map((_, i) => (
					<TextInput
						key={i + 6}
						ref={(el) => (inputsRef.current[i + 6] = el)}
						style={styles.input}
						value={dateValues[i + 6]}
						onChangeText={(text) => handleChangeText(text, i + 6)}
						placeholder="D"
						keyboardType="numeric"
						maxLength={1}
						placeholderTextColor={'#C6C5C7'}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dateInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#C6C5C7',
		textAlign: 'center',
		fontSize: verticalScale(24),
		width: 18,
		marginHorizontal: 2,
		color: '#5D5B5D',
	},
	separator: {
		fontSize: verticalScale(24),
		marginHorizontal: 4,
		color: '#C6C5C7',
	},
});
