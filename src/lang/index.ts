import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { Language } from 'utils'
import en from './en.json'
import sk from './sk.json'

const resources = {
  [Language.English]: en,
  [Language.Slovak]: sk,
}

export default i18n.use(initReactI18next).init({
  resources,
  fallbackLng: Language.English,
  lng: Language.English,
})
