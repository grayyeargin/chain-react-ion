import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import chainReactionApp from './reducer'

const loggerMiddleware = createLogger()

let store = createStore(
	chainReactionApp,
	applyMiddleware(
    loggerMiddleware
  )
)

export default store
