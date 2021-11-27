import React from 'react'
import { Heading as NbHeading, IHeadingProps } from 'native-base'

interface Props extends IHeadingProps {
  children: string
}

export const Heading = ({ children, ...rest }: Props) => (
  <NbHeading fontSize="4xl" mb="8" {...rest}>
    {children}
  </NbHeading>
)
