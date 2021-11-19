/* eslint-disable @typescript-eslint/no-unsafe-return */
import { AnyAction } from 'redux'
import { Actions } from 'state'
import { Languages, WeatherUnits } from 'utils'

export const languageReducer = (
  state = Languages.English,
  action: AnyAction
) => {
  if (action.type === Actions.ChangeLanguage && action.payload) {
    return action.payload
  }
  return state
}

export const weatherUnitReducer = (
  state = WeatherUnits.Celsius,
  action: AnyAction
) => {
  if (action.type === Actions.ChangeWeatherUnit && action.payload) {
    return action.payload
  }
  return state
}
