import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from './components/SplashScreen'
import AuthNavigator from './navigators/AuthNavigator'
import MainNavigator from './navigators/MainNavigator'

export default function App() {
	const [isShowSplashScreen, setIsShowSplashScreen] = useState(true)
	const [isHaveAccessToken, setIsHaveAccessToken] = useState(false)

	const checkSessionAccount = async () => {
		const token = await AsyncStorage.getItem('accessToken')
		return token && setIsHaveAccessToken(true)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowSplashScreen(false)
		}, 3000)

		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		checkSessionAccount()
	}, [])

	return (
		<SafeAreaProvider>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>

			{isShowSplashScreen ? (
				<SplashScreen />
			) : (
				<NavigationContainer independent={true}>
					{isHaveAccessToken ? (
						<MainNavigator />
					) : (
						<AuthNavigator />
					)}
				</NavigationContainer>
			)}
		</SafeAreaProvider>
	)
}
