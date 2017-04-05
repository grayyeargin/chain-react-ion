import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import chainReactionApp from './reducer'

const loggerMiddleware = createLogger()

const initialState = {
	score: 0,
	scoreNeeded: 2,
	level: 1,
	ballCount: 30,
	percentNeeded: 0.1,
	boardSettings: {
		height: 400,
		width: 700
	},
	layover: {
		active: true,
		view: 'start'
	},
	balls: [],
	explosions: [],
	context: null
}

let store = createStore(
	chainReactionApp,
	initialState,
	applyMiddleware(
    loggerMiddleware
  )
)

export default store
