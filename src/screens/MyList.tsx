import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'hooks'
import { VStack } from 'native-base'
import { Heading, LocationItem, ScreenWrapper } from 'components'

const locationsData = [
  {
    id: 1234,
    city: 'Kosice',
    temperature: 23,
    weather: 800,
  },
  {
    id: 1235,
    city: 'Bratislava',
    temperature: -15,
    weather: 801,
  },
  {
    id: 1236,
    city: 'New York',
    temperature: 4,
    weather: 701,
  },
  {
    id: 1237,
    city: 'London',
    temperature: -5,
    weather: 600,
  },
]

export const MyList = () => {
  const { t, i18n } = useTranslation()
  const language = useAppSelector((state) => state.language)
  const weatherUnit = useAppSelector((state) => state.weatherUnit)

  useEffect(() => {
    if (language !== i18n.language) {
      void i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <ScreenWrapper>
      <Heading>{t('list.title')}</Heading>
      <VStack space={4}>
        {locationsData.map(({ id, ...rest }) => (
          <LocationItem key={id} unit={weatherUnit} {...rest} />
        ))}
      </VStack>
    </ScreenWrapper>
  )
}
