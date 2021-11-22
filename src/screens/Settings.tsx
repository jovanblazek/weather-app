import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Constants from 'expo-constants'
import { useAppDispatch, useAppSelector } from 'hooks'
import { Box, Divider, Text, VStack } from 'native-base'
import { changeLanguage, changeWeatherUnit } from 'state'
import { Heading, ScreenWrapper, Select, SettingsItem } from 'components'
import { Language, WeatherUnit } from 'utils'

export const Settings = () => {
  const language = useAppSelector((state) => state.language)
  const weatherUnit = useAppSelector((state) => state.weatherUnit)
  const dispatch = useAppDispatch()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (language !== i18n.language) {
      void i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <ScreenWrapper>
      <Heading>{t('settings.title')}</Heading>
      <VStack space={2} divider={<Divider />}>
        <SettingsItem
          rightElement={
            <Select
              placeholder={t('settings.language')}
              items={[
                { label: 'English', value: Language.English },
                { label: 'Slovak', value: Language.Slovak },
              ]}
              onChange={(value) => {
                dispatch(changeLanguage(value as Language))
              }}
              selectedValue={language}
            />
          }
        >
          {t('settings.language')}
        </SettingsItem>
        <SettingsItem
          rightElement={
            <Select
              placeholder={t('settings.units')}
              items={[
                { label: 'Celsius', value: WeatherUnit.Celsius },
                { label: 'Fahrenheit ', value: WeatherUnit.Fahrenheit },
              ]}
              onChange={(value) => {
                dispatch(changeWeatherUnit(value as WeatherUnit))
              }}
              selectedValue={weatherUnit}
            />
          }
        >
          {t('settings.units')}
        </SettingsItem>
        <SettingsItem rightElement={Constants.manifest?.version}>
          {t('settings.version')}
        </SettingsItem>
      </VStack>
      <Box mt="16">
        <Text textAlign="center">Made with ♥</Text>
        <Text textAlign="center">&copy; Jovan Blazek 2021</Text>
      </Box>
    </ScreenWrapper>
  )
}
