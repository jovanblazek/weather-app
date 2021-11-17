import React, { ReactNode } from 'react'
import { HStack, Text } from 'native-base'

interface Props {
  rightElement?: ReactNode
  children: string
}

export const SettingsItem = ({ rightElement, children }: Props) => (
  <HStack justifyContent="space-between" alignItems="center" py="2">
    <Text>{children}</Text>
    {rightElement ?? null}
  </HStack>
)
