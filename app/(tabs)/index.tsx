import { HomeContainer } from '@/container';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
	const router = useRouter();
	useFocusEffect(
		useCallback(() => {
			setTimeout(() => {
				router.push('/auth');
			}, 300);
		}, [])
	);

	return <HomeContainer />;
}

