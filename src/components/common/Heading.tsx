import React from 'react'
import { Text } from '@ui-kitten/components'

interface Props {
  children: string
}

export const Heading = ({ children }: Props) => (
  <Text category="h1">{children}</Text>
)
