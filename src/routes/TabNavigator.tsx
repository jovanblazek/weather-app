import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Colors } from 'theme'
import { Icon, IconName } from 'components'
import { TabRoutes } from 'routes'
import { Home, MyList, Settings } from 'screens'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabRoutes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName: IconName = 'settings'

          if (route.name === TabRoutes.List) {
            iconName = 'list'
          }
          if (route.name === TabRoutes.Home) {
            iconName = 'map-pin'
          }
          return <Icon name={iconName} size="sm" color={color} />
        },
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.grayDark,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name={TabRoutes.List} component={MyList} />
      <Tab.Screen name={TabRoutes.Home} component={Home} />
      <Tab.Screen name={TabRoutes.Settings} component={Settings} />
    </Tab.Navigator>
  )
}
