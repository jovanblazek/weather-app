import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { store } from 'state'
import { themeConfig } from 'theme'
import { TabNavigator } from 'routes/TabNavigator'

export default function App() {
  return (
    <>
      <NativeBaseProvider config={themeConfig}>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <TabNavigator />
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
    </>
  )
}
