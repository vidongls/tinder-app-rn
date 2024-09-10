import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Logo } from '@/icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();

	const [loaded] = useFonts({
		'Inter-Thin': require('../assets/fonts/Inter_18pt-Thin.ttf'),
		'Inter-Light': require('../assets/fonts/Inter_18pt-Light.ttf'),
		'Inter-Regular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
		'Inter-Medium': require('../assets/fonts/Inter_18pt-Medium.ttf'),
		'Inter-SemiBold': require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
		'Inter-Bold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
		'Inter-ExtraBold': require('../assets/fonts/Inter_18pt-ExtraBold.ttf'),
		'Inter-Black': require('../assets/fonts/Inter_18pt-Black.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="auth-ops"
					options={{
						headerTitle: () => (
							<View>
								<Logo />
							</View>
						),
						headerTitleAlign: 'center',
						headerTintColor: '#828693',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerBackTitleVisible: false,
						headerShadowVisible: false,
					}}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
		</ThemeProvider>
	);
}

