import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'hooks'
import { Button, FlatList, Flex } from 'native-base'
import { Heading, Icon, LocationItem, ScreenWrapper } from 'components'

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
    <Flex
      flexGrow={1}
      bg={{
        linearGradient: {
          colors: ['#2d91c2', '#1e528e'],
          start: [0, 0],
          end: [0, 1],
        },
      }}
    >
      <ScreenWrapper
        SafeAreaStyles={{
          flex: 1,
        }}
      >
        <Flex direction="row" justifyContent="space-between">
          <Heading color="white">{t('list.title')}</Heading>
          <Button
            bgColor="transparent"
            height="40px"
            width="40px"
            mt="1"
            onPress={() => console.log('add pressed')}
          >
            <Icon color="#fff" name="plus" size="6" />
          </Button>
        </Flex>
        <FlatList
          data={locationsData}
          renderItem={({ item }) => (
            <LocationItem
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              key={item.id.toString()}
              mb="4"
              unit={weatherUnit}
              {...item}
            />
          )}
          showsVerticalScrollIndicator={false}
          mb="42px"
        />
      </ScreenWrapper>
    </Flex>
  )
}
