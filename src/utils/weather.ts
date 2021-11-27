import { WeatherCondition, WeatherUnit } from './constants'

export const getWeatherGradient = (weather: WeatherCondition) => {
  let colorStart
  let colorEnd
  switch (weather) {
    case WeatherCondition.Clear:
      colorStart = 'yellow.300'
      colorEnd = 'orange.300'
      break
    case WeatherCondition.Cloudy:
      colorStart = 'gray.400'
      colorEnd = 'gray.400'
      break
    case WeatherCondition.Rain:
      colorStart = 'blue.300'
      colorEnd = 'blue.500'
      break
    default:
      colorStart = 'gray.200'
      colorEnd = 'gray.400'

      break
  }
  return {
    colors: [colorStart, colorEnd],
    start: [0, 0],
    end: [1, 1],
  }
}

export const getTemperatureUnit = (weatherUnit: WeatherUnit) => {
  if (weatherUnit === WeatherUnit.Celsius) {
    return '\u00B0C'
  }
  return '\u00B0F'
}
