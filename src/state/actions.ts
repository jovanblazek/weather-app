import { Languages, WeatherUnits } from 'utils'

export enum Actions {
  ChangeLanguage = 'LANGUAGE_CHANGED',
  ChangeWeatherUnit = 'WEATHER_UNIT_CHANGED',
}

export const changeLanguage = (newLanguage: Languages) => {
  return {
    type: Actions.ChangeLanguage,
    payload: newLanguage,
  }
}

export const changeWeatherUnit = (newUnit: WeatherUnits) => {
  return {
    type: Actions.ChangeWeatherUnit,
    payload: newUnit,
  }
}
