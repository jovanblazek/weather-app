/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, applyMiddleware, createStore } from 'redux'
import { Languages, WeatherUnits } from 'utils'
import reducers from './reducers'

interface AppState {
  language: Languages
  weatherUnit: WeatherUnits
}

const INITIAL_STATE = {
  language: Languages.English,
  weatherUnit: WeatherUnits.Celsius,
}

function logger({ getState }: { getState: any }) {
  return (next: (arg0: any) => any) => (action: AnyAction) => {
    console.log('will dispatch', action)
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)
    console.log('state after dispatch', getState())
    // The action itself
    return returnValue
  }
}

export const store = createStore<AppState, AnyAction, unknown, unknown>(
  reducers,
  INITIAL_STATE,
  applyMiddleware(logger)
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
