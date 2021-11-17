import React from 'react'
import { CheckIcon, Divider, Select, VStack } from 'native-base'
import { Heading, ScreenWrapper, SettingsItem } from 'components'

const LanguageSelect = () => (
  <Select
    minWidth="180"
    accessibilityLabel="Language"
    placeholder="Language"
    _selectedItem={{
      bg: 'blue.200',
      endIcon: <CheckIcon size="5" />,
    }}
    mt={1}
    onValueChange={(itemValue) => console.log(itemValue)}
  >
    <Select.Item label="UX Research" value="ux" />
    <Select.Item label="Web Development" value="web" />
    <Select.Item label="Cross Platform Development" value="cross" />
    <Select.Item label="UI Designing" value="ui" />
    <Select.Item label="Backend Development" value="backend" />
  </Select>
)

export const Settings = () => {
  return (
    <ScreenWrapper>
      <Heading>Settings</Heading>
      <VStack space={2} divider={<Divider />}>
        <SettingsItem rightElement={<LanguageSelect />}>Language</SettingsItem>
        <SettingsItem>Hello</SettingsItem>
        <SettingsItem>Hello</SettingsItem>
      </VStack>
    </ScreenWrapper>
  )
}
