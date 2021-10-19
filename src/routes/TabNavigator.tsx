import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import MyList from '../screens/MyList'
import Settings from '../screens/Settings'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'MyList') {
            return <Feather name="cloud" size={size} color={color} />
          } else if (route.name === 'Home') {
            return <Feather name="home" size={size} color={color} />
          }
          return <Feather name="settings" size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen name="MyList" component={MyList} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
