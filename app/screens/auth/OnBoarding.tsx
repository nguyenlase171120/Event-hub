import {
	firstOnBoarding,
	secondOnboarding,
	thirdOnboarding,
} from '@/assets/images'
import { SCREEN_ROUTES } from '@/constant'
import React, { useState } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'

export default function OnBoarding({ navigation }: any) {
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<SafeAreaView className="flex  flex-1">
			<Swiper
				style={{}}
				loop={false}
				activeDotColor="#fff"
				index={currentIndex}
				onIndexChanged={(index) =>
					setCurrentIndex(index)
				}
			>
				<Image
					source={firstOnBoarding}
					style={{
						width: Dimensions.get(
							'window',
						).width,
						height: Dimensions.get(
							'window',
						).height,
						resizeMode: 'cover',
					}}
				/>

				<Image
					source={secondOnboarding}
					style={{
						width: Dimensions.get(
							'window',
						).width,
						height: Dimensions.get(
							'window',
						).height,
						resizeMode: 'cover',
					}}
				/>

				<Image
					source={thirdOnboarding}
					style={{
						width: Dimensions.get(
							'window',
						).width,
						height: Dimensions.get(
							'window',
						).height,
						resizeMode: 'cover',
					}}
				/>
			</Swiper>

			<View className="flex flex-row items-center w-full justify-between absolute bottom-0 left-0 right-0 px-3 py-4">
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(
							SCREEN_ROUTES
								.auth
								.loginAccount,
						)
					}
				>
					<Text className="text-white text-base font-medium opacity-50">
						Skip
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						currentIndex < 2
							? setCurrentIndex(
									currentIndex +
										1,
								)
							: navigation.navigate(
									SCREEN_ROUTES
										.auth
										.loginAccount,
								)
					}
				>
					<Text className="text-white text-base font-medium">
						Next
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
