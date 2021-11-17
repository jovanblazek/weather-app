import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { TabNavigator } from 'routes/TabNavigator'

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <TabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  )
}
