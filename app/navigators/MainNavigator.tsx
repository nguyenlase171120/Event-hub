import { SCREEN_ROUTES } from '@/constant'
import HomePage from '@/screens/HomePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={SCREEN_ROUTES.home}
				component={HomePage}
			/>
		</Stack.Navigator>
	)
}

export default MainNavigator
