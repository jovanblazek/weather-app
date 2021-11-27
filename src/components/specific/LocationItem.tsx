import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useWeatherCondition } from 'hooks'
import { Flex, HStack, IFlexProps, Text } from 'native-base'
import { getTemperatureUnit, WeatherUnit } from 'utils'

interface Props extends IFlexProps {
  city: string
  temperature: number
  unit: WeatherUnit
  weather: number
}

export const LocationItem = ({
  city,
  temperature,
  unit,
  weather,
  ...rest
}: Props) => {
  const weatherCondition = useWeatherCondition(weather)
  return (
    <TouchableOpacity
      onPress={() => console.log('press')}
      onLongPress={() => console.log('long press')}
      activeOpacity={0.8}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        p="4"
        rounded="md"
        backgroundColor="#ffffff90"
        {...rest}
      >
        <Text fontSize="2xl">{city}</Text>
        <HStack space={4} alignItems="center">
          <Image
            source={weatherCondition.image}
            style={{
              width: 40,
              height: 40,
            }}
            resizeMode="contain"
          />
          <Text width="20" textAlign="right" fontSize="2xl">
            {temperature}
            {getTemperatureUnit(unit)}
          </Text>
        </HStack>
      </Flex>
    </TouchableOpacity>
  )
}
