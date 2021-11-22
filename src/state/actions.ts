import { Language, WeatherUnit } from 'utils'

export enum Actions {
  ChangeLanguage = 'LANGUAGE_CHANGED',
  ChangeWeatherUnit = 'WEATHER_UNIT_CHANGED',
}

export const changeLanguage = (newLanguage: Language) => {
  return {
    type: Actions.ChangeLanguage,
    payload: newLanguage,
  }
}

export const changeWeatherUnit = (newUnit: WeatherUnit) => {
  return {
    type: Actions.ChangeWeatherUnit,
    payload: newUnit,
  }
}
