/* eslint-disable @typescript-eslint/no-unsafe-return */
import { AnyAction } from 'redux'
import { Language, WeatherUnit } from 'utils'
import { Actions } from '../actions'

export const languageReducer = (
  state = Language.English,
  action: AnyAction
) => {
  if (action.type === Actions.ChangeLanguage && action.payload) {
    return action.payload
  }
  return state
}

export const weatherUnitReducer = (
  state = WeatherUnit.Celsius,
  action: AnyAction
) => {
  if (action.type === Actions.ChangeWeatherUnit && action.payload) {
    return action.payload
  }
  return state
}
