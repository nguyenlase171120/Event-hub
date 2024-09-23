import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function LoginAccount() {
	return (
		<View>
			<Text>LoginAccount</Text>
			<Button
				title="Login"
				onPress={async () => {
					await AsyncStorage.setItem(
						'accessToken',
						'123123',
					)
				}}
			/>
		</View>
	)
}
