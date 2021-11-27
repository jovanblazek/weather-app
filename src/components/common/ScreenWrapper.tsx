import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, IBoxProps } from 'native-base'

interface Props extends IBoxProps {
  SafeAreaStyles?: StyleProp<ViewStyle>
  children: ReactNode
}

export const ScreenWrapper = ({
  SafeAreaStyles = {},
  children,
  ...rest
}: Props) => (
  <SafeAreaView style={SafeAreaStyles}>
    <Box px="4" pt="4" {...rest}>
      {children}
    </Box>
  </SafeAreaView>
)
