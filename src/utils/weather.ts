import { WeatherType } from './constants'

export const getWeatherGradient = (weather: WeatherType) => {
  let colorStart
  let colorEnd
  switch (weather) {
    case WeatherType.Clear:
      colorStart = 'orange.200'
      colorEnd = 'yellow.400'
      break
    case WeatherType.Cloudy:
      colorStart = 'gray.400'
      colorEnd = 'gray.400'
      break
    case WeatherType.Rain:
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
    end: [1, 0],
  }
}
