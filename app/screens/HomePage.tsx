import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function HomePage() {
	return (
		<View>
			<Text>HomePage</Text>
			<Button
				title="Logout"
				onPress={async () =>
					await AsyncStorage.clear()
				}
			/>
		</View>
	)
}
