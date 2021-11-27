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

export const WeatherConditionData = {
  [WeatherCondition.Clear]: {
    condition: WeatherCondition.Clear,
    image: require('images/sunny.png'),
    image_night: require('images/night.png'),
  },
  [WeatherCondition.Cloudy]: {
    condition: WeatherCondition.Cloudy,
    image: require('images/cloudy.png'),
    image_night: require('images/cloudy.png'),
  },
  [WeatherCondition.Fog]: {
    condition: WeatherCondition.Fog,
    image: require('images/fog.png'),
    image_night: require('images/fog_night.png'),
  },
  [WeatherCondition.PartlyCloudy]: {
    condition: WeatherCondition.PartlyCloudy,
    image: require('images/partly_cloudy.png'),
    image_night: require('images/partly_cloudy_night.png'),
  },
  [WeatherCondition.Rain]: {
    condition: WeatherCondition.Rain,
    image: require('images/rain.png'),
    image_night: require('images/rain_night.png'),
  },
  [WeatherCondition.Snow]: {
    condition: WeatherCondition.Snow,
    image: require('images/snow.png'),
    image_night: require('images/snow_night.png'),
  },
  [WeatherCondition.Thunder]: {
    condition: WeatherCondition.Thunder,
    image: require('images/thunder.png'),
    image_night: require('images/thunder.png'),
  },
  [WeatherCondition.Windy]: {
    condition: WeatherCondition.Windy,
    image: require('images/windy.png'),
    image_night: require('images/windy.png'),
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
