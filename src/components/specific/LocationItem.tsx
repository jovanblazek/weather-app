import React from 'react'
import { useWeatherCondition } from 'hooks'
import { Flex, HStack, Image, Text } from 'native-base'
import {
  getTemperatureUnit,
  getWeatherGradient,
  WeatherConditionImage,
  WeatherUnit,
} from 'utils'

interface Props {
  city: string
  temperature: number
  unit: WeatherUnit
  weather: number
}

export const LocationItem = ({ city, temperature, unit, weather }: Props) => {
  const weatherCondition = useWeatherCondition(weather)
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      p="4"
      rounded="md"
      color="yellow.200"
      bg={{ linearGradient: getWeatherGradient(weatherCondition) }}
    >
      <Text fontSize="2xl">{city}</Text>
      <HStack space={4} alignItems="center">
        <Image
          source={WeatherConditionImage[weatherCondition].image}
          w="32px"
          h="32px"
          resizeMode="contain"
        />
        <Text width="20" textAlign="right" fontSize="2xl">
          {temperature}
          {getTemperatureUnit(unit)}
        </Text>
      </HStack>
    </Flex>
  )
}
