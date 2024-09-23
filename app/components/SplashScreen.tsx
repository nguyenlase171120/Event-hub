import { logo, splashBG } from '@/assets/images'
import React from 'react'
import {
	ActivityIndicator,
	Dimensions,
	Image,
	ImageBackground,
} from 'react-native'

export default function SplashScreen() {
	return (
		<ImageBackground
			source={splashBG}
			className="flex items-center justify-center flex-1"
		>
			<Image
				source={logo}
				style={{
					width:
						Dimensions.get(
							'window',
						).width * 0.8,
					resizeMode: 'contain',
				}}
			/>

			<ActivityIndicator
				className="mt-4"
				color={'#5669FF'}
			/>
		</ImageBackground>
	)
}
