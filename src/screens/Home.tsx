import React from 'react'
import { Box, Flex } from 'native-base'
import { Heading, ScreenWrapper } from 'components'

export const Home = () => {
  return (
    <ScreenWrapper>
      <Heading>Home</Heading>
      <Flex alignItems="center">
        <Box>hello</Box>
        <Box>hello</Box>
        <Box>hello</Box>
      </Flex>
    </ScreenWrapper>
  )
}
