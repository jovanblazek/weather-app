import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { themeConfig } from 'theme'
import { TabNavigator } from 'routes/TabNavigator'

export default function App() {
  return (
    <>
      <NativeBaseProvider config={themeConfig}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <TabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}
