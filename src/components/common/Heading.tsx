import React from 'react'
import { Heading as NbHeading } from 'native-base'

interface Props {
  children: string
}

export const Heading = ({ children }: Props) => (
  <NbHeading fontSize="4xl" mb="4">
    {children}
  </NbHeading>
)
