import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'state'
import { themeConfig } from 'theme'
import { TabNavigator } from 'routes/TabNavigator'
import 'lang'

export default function App() {
  return (
    <>
      <NativeBaseProvider config={themeConfig}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <StatusBar barStyle="dark-content" />
              <TabNavigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </NativeBaseProvider>
    </>
  )
}
