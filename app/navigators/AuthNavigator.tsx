import { SCREEN_ROUTES } from '@/constant'
import LoginAccount from '@/screens/auth/LoginAccount'
import OnBoarding from '@/screens/auth/OnBoarding'
import RegisterAccount from '@/screens/auth/RegisterAccount'
import ResetPassword from '@/screens/auth/ResetPassword'
import VerifyAccount from '@/screens/auth/VerifyAccount'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
const Stack = createNativeStackNavigator()
const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name={SCREEN_ROUTES.auth.onBoarding}
				component={OnBoarding}
			/>
			<Stack.Screen
				name={SCREEN_ROUTES.auth.loginAccount}
				component={LoginAccount}
			/>
			<Stack.Screen
				name={
					SCREEN_ROUTES.auth
						.registerAccount
				}
				component={RegisterAccount}
			/>
			<Stack.Screen
				name={SCREEN_ROUTES.auth.resetPassword}
				component={ResetPassword}
			/>
			<Stack.Screen
				name={SCREEN_ROUTES.auth.verifyAccount}
				component={VerifyAccount}
			/>
		</Stack.Navigator>
	)
}

export default AuthNavigator
