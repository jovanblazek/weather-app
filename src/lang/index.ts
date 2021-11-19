import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { Languages } from 'utils'
import en from './en.json'
import sk from './sk.json'

const resources = {
  [Languages.English]: en,
  [Languages.Slovak]: sk,
}

export default i18n.use(initReactI18next).init({
  resources,
  fallbackLng: Languages.English,
  lng: Languages.English,
})
