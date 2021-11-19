import React from 'react'
import Constants from 'expo-constants'
import { useAppDispatch, useAppSelector } from 'hooks'
import { Box, Divider, Text, VStack } from 'native-base'
import { changeLanguage, changeWeatherUnit } from 'state'
import { Heading, ScreenWrapper, Select, SettingsItem } from 'components'
import { Languages, WeatherUnits } from 'utils'

export const Settings = () => {
  const currentLanguage = useAppSelector((state) => state.language)
  const currentWeatherUnit = useAppSelector((state) => state.weatherUnit)
  const dispatch = useAppDispatch()

  return (
    <ScreenWrapper>
      <Heading>Settings</Heading>
      <VStack space={2} divider={<Divider />}>
        <SettingsItem
          rightElement={
            <Select
              placeholder="Language"
              items={[
                { label: 'English', value: Languages.English },
                { label: 'Slovak', value: Languages.Slovak },
              ]}
              onChange={(value) => {
                dispatch(changeLanguage(value as Languages))
              }}
              selectedValue={currentLanguage}
            />
          }
        >
          Language
        </SettingsItem>
        <SettingsItem
          rightElement={
            <Select
              placeholder="Units"
              items={[
                { label: 'Celsius', value: WeatherUnits.Celsius },
                { label: 'Fahrenheit ', value: WeatherUnits.Fahrenheit },
              ]}
              onChange={(value) => {
                dispatch(changeWeatherUnit(value as WeatherUnits))
              }}
              selectedValue={currentWeatherUnit}
            />
          }
        >
          Units
        </SettingsItem>
        <SettingsItem rightElement={Constants.manifest?.version}>
          Version
        </SettingsItem>
      </VStack>
      <Box mt="16">
        <Text textAlign="center">Made with ♥</Text>
        <Text textAlign="center">&copy; Jovan Blazek 2021</Text>
      </Box>
    </ScreenWrapper>
  )
}
