import React from 'react'
import { VStack } from 'native-base'
import { Heading, LocationItem, ScreenWrapper } from 'components'
import { WeatherType } from 'utils'

const locationsData = [
  {
    id: 1234,
    city: 'Kosice',
    temperature: 23,
    weather: WeatherType.Clear,
  },
  {
    id: 1235,
    city: 'Bratislava',
    temperature: -15,
    weather: WeatherType.Cloudy,
  },
  {
    id: 1236,
    city: 'New York',
    temperature: 4,
    weather: WeatherType.Rain,
  },
  {
    id: 1237,
    city: 'London',
    temperature: -5,
    weather: WeatherType.Snow,
  },
]

export const MyList = () => {
  return (
    <ScreenWrapper>
      <Heading>My Locations</Heading>
      <VStack space={4}>
        {locationsData.map(({ id, ...rest }) => (
          <LocationItem key={id} {...rest} />
        ))}
      </VStack>
    </ScreenWrapper>
  )
}
