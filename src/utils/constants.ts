export enum WeatherCondition {
  Clear = 'clear',
  Cloudy = 'cloudy',
  Fog = 'fog',
  PartlyCloudy = 'partly_cloudy',
  Rain = 'rain',
  Snow = 'snow',
  Thunder = 'thunderstorm',
  Windy = 'windy',
}

export const WeatherConditionImage = {
  [WeatherCondition.Clear]: {
    image: require('images/sunny.svg'),
    image_night: require('images/night.svg'),
  },
  [WeatherCondition.Cloudy]: {
    image: require('images/cloudy.svg'),
    image_night: require('images/cloudy.svg'),
  },
  [WeatherCondition.Fog]: {
    image: require('images/fog.svg'),
    image_night: require('images/fog_night.svg'),
  },
  [WeatherCondition.PartlyCloudy]: {
    image: require('images/partly_cloudy.svg'),
    image_night: require('images/partly_cloudy_night.svg'),
  },
  [WeatherCondition.Rain]: {
    image: require('images/rain.svg'),
    image_night: require('images/rain_night.svg'),
  },
  [WeatherCondition.Snow]: {
    image: require('images/snow.svg'),
    image_night: require('images/snow_night.svg'),
  },
  [WeatherCondition.Thunder]: {
    image: require('images/thunder.svg'),
    image_night: require('images/thunder.svg'),
  },
  [WeatherCondition.Windy]: {
    image: require('images/windy.svg'),
    image_night: require('images/windy.svg'),
  },
}

export enum WeatherUnit {
  Celsius = 'metric',
  Fahrenheit = 'imperial',
}

export enum Language {
  English = 'en',
  Slovak = 'sk',
}
