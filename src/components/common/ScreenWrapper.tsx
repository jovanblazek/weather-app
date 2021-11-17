import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, IBoxProps } from 'native-base'

interface Props extends IBoxProps {
  children: ReactNode
}

export const ScreenWrapper = ({ children, ...rest }: Props) => (
  <SafeAreaView>
    <Box px="4" pt="4" {...rest}>
      {children}
    </Box>
  </SafeAreaView>
)
