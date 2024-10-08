import { LogoText } from '@/icons';
import { verticalScale } from '@/util';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AuthBox } from './components';

export const AuthContainer = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['#EA4080', '#EE805F']}
				start={{ x: 1, y: 1 }}
				end={{ x: 2, y: 0 }}
				style={styles.gradient}
			>
				<SafeAreaView style={styles.safeArea}>
					<View style={styles.boxMain}>
						<LogoText />
						<AuthBox />
					</View>
				</SafeAreaView>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	gradient: {
		flex: 1,
	},
	safeArea: {
		flex: 1,
	},
	boxMain: {
		flex: 1,
		justifyContent: 'flex-end',
		flexDirection: 'column',
		alignItems: 'center',
		paddingVertical: verticalScale(50),
		paddingHorizontal: verticalScale(44),
	},
});
