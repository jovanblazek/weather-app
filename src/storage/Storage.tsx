/* import React, { createContext, ReactNode, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Languages, WeatherUnits } from 'utils'

const STORAGE_KEY = 'weather-app-data'

type AppData = {
  settings: {
    language: Languages
    units: WeatherUnits
  }
}

const getStoredAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY)

    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(data)
    }
    return null
  } catch {
    console.log('Error reading data')
    return null
  }
}

const setStoredAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
  } catch {
    console.log('Error setting data')
  }
}

const DEFAULT_CONTEXT_VALUES = {
  settings: {
    language: Languages.English,
    units: WeatherUnits.Celsius,
  },
}
*/
