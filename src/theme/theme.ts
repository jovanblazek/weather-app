import { extendTheme } from 'native-base'

export const Colors = {
  white: '#FFF',
  black: '#000',
  blue: '#426AB3',
  grayDark: '#333333',
  grayLight: '#CCD5DC',
  grayGeyser: '#D9DFE5',
  grayAthensDark: '#EDF0F3',
  grayAthensLight: '#F2F4F6',
  green: '#99cc66',
  red: '#ff6666',
  redLight: '#FFE0E0',
}

const customTheme = {
  colors: {
    ...Colors,
  },
  /*
  components: {
    ...Variants,
  }, */
}

export const theme = extendTheme(customTheme)
