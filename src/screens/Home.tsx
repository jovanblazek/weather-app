import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import { LocationObject } from 'expo-location'
import { useAppSelector } from 'hooks'
import { Flex, ScrollView, Spinner, Text } from 'native-base'
import { Heading, ScreenWrapper } from 'components'
import { getWeatherGradient, WeatherCondition } from 'utils'

export const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [weather, setWeather] = useState<unknown | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { t, i18n } = useTranslation()

  const language = useAppSelector((state) => state.language)
  const weatherUnit = useAppSelector((state) => state.weatherUnit)

  useEffect(() => {
    if (language !== i18n.language) {
      void i18n.changeLanguage(language)
    }
  }, [language])

  useEffect(() => {
    void (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const currentLocation = await Location.getCurrentPositionAsync({})
      setLocation(currentLocation)
    })()
  }, [])
  /*
  useEffect(() => {
    if (location && weatherUnit) {
      void fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${Constants.manifest?.extra.apiKey}&units=${weatherUnit}`
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false)
          setWeather(data)
        })
        .catch((e) => {
          console.log(e)
          setIsLoading(false)
          setErrorMsg('Unable to fetch weather data')
        })
    }
  }, [location, weatherUnit])
*/
  return (
    <Flex
      flexGrow={1}
      bg={{ linearGradient: getWeatherGradient(WeatherCondition.Clear) }}
    >
      <ScreenWrapper
        SafeAreaStyles={{
          flex: 1,
        }}
      >
        <Heading>San Francisco</Heading>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Flex alignItems="center" flexGrow={1} alignSelf="stretch">
            {errorMsg && <Text>{errorMsg}</Text>}
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
            <Text h="24">aassa</Text>
          </Flex>
        </ScrollView>
      </ScreenWrapper>
    </Flex>
  )
}
