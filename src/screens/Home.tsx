import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import { LocationObject } from 'expo-location'
import { useAppSelector } from 'hooks'
import { Flex, Spinner, Text } from 'native-base'
import { Heading, ScreenWrapper } from 'components'

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

  return (
    <ScreenWrapper>
      <Heading>{t('home.title')}</Heading>
      <Flex alignItems="center">
        {isLoading && <Spinner />}
        {errorMsg && <Text>{errorMsg}</Text>}
        {weather && (
          <>
            <Text>{weather.name}</Text>
            <Text>{weather.main.temp}</Text>
          </>
        )}
      </Flex>
    </ScreenWrapper>
  )
}
