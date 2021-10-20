import React from 'react'
import { StatusBar } from 'react-native'
import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { TabNavigator } from './src/routes/TabNavigator'

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <TabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}
