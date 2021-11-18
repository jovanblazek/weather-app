import React from 'react'
import Constants from 'expo-constants'
import { Box, Divider, Text, VStack } from 'native-base'
import { Heading, ScreenWrapper, Select, SettingsItem } from 'components'

export const Settings = () => {
  return (
    <ScreenWrapper>
      <Heading>Settings</Heading>
      <VStack space={2} divider={<Divider />}>
        <SettingsItem
          rightElement={
            <Select
              placeholder="Language"
              items={[
                { label: 'English', value: 'en' },
                { label: 'Slovak', value: 'sk' },
              ]}
              onChange={(value) => {
                console.log(value)
              }}
              selectedValue="en"
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
                { label: 'Celsius', value: 'c' },
                { label: 'Fahrenheit ', value: 'f' },
              ]}
              onChange={(value) => {
                console.log(value)
              }}
              selectedValue="c"
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
