import { combineReducers } from 'redux'
import { languageReducer, weatherUnitReducer } from './reducers'

const reducers = combineReducers({
  language: languageReducer,
  weatherUnit: weatherUnitReducer,
})

export default reducers
