import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'hooks'
import { Box, Flex } from 'native-base'
import { Heading, ScreenWrapper } from 'components'

export const Home = () => {
  const { t, i18n } = useTranslation()

  const language = useAppSelector((state) => state.language)

  useEffect(() => {
    if (language !== i18n.language) {
      void i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <ScreenWrapper>
      <Heading>{t('home.title')}</Heading>
      <Flex alignItems="center">
        <Box>hello</Box>
        <Box>hello</Box>
        <Box>hello</Box>
      </Flex>
    </ScreenWrapper>
  )
}
