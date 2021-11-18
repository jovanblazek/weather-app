import React from 'react'
import { Flex, HStack, Text } from 'native-base'
import { getWeatherGradient, WeatherType } from 'utils'

interface Props {
  city: string
  temperature: number
  weather: WeatherType
}

export const LocationItem = ({ city, temperature, weather }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      p="4"
      rounded="md"
      color="yellow.200"
      bg={{ linearGradient: getWeatherGradient(weather) }}
    >
      <Text fontSize="2xl">{city}</Text>
      <HStack space={4} alignItems="center">
        <Text>{weather}</Text>
        <Text width="20" textAlign="right" fontSize="2xl">
          {temperature}&deg;C
        </Text>
      </HStack>
    </Flex>
  )
}
