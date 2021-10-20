import React from 'react'
import { Icon } from 'react-native-eva-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, MyList, Settings } from '../screens'

const Tab = createBottomTabNavigator()

// TODO make enum for routes, simplify icon
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'MyList') {
            return (
              <Icon
                name="list-outline"
                width={size}
                height={size}
                fill={color}
              />
            )
          }
          if (route.name === 'Home') {
            return (
              <Icon
                name="home-outline"
                width={size}
                height={size}
                fill={color}
              />
            )
          }
          return (
            <Icon
              name="settings-2-outline"
              width={size}
              height={size}
              fill={color}
            />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 90,
        },
      })}
    >
      <Tab.Screen name="MyList" component={MyList} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
