import { combineReducers } from 'redux'

import { INC_SCORE, NEXT_LEVEL, HIDE_LAYOVER, SHOW_LAYOVER } from './actions'

// Map of application state structure
const initialState = {
	score: 0,
	scoreNeeded: 2,
	level: 1,
	ballCount: 30,
	percentNeeded: 0.1,
	layover: {
		active: true,
		view: 'start'
	} 
}

function score(state = initialState.score, action) {
	switch (action.type) {
		case INC_SCORE:
			return state + 1
		default:
			return state
	}
}

function scoreNeeded(state = initialState.scoreNeeded, action) {
	switch (action.type) {
		case NEXT_LEVEL:
			return state.scoreNeeded
		default:
			return state
	}
}

function level(state = initialState.level, action) {
	switch (action.type) {
		case NEXT_LEVEL:
			return state.level + 1
		default:
			return state
	}
}

function ballCount(state = initialState.ballCount, action) {
	switch (action.type) {
		case NEXT_LEVEL:
			return state.ballCount
		default:
			return state
	}
}

function percentNeeded(state = initialState.percentNeeded, action) {
	switch (action.type) {
		case NEXT_LEVEL:
			return state.percentNeeded
		default:
			return state
	}
}

function layover(state = initialState.layover, action) {
	switch (action.type) {
		case HIDE_LAYOVER:
			return Object.assign({}, state, {
        active: false
      })
		case SHOW_LAYOVER:
			return Object.assign({}, state, {
        active: true,
        view: action.view
      }) 
		default:
			return state
	}
}

const chainReactionApp = combineReducers({
	score,
	scoreNeeded,
	level,
	ballCount,
	layover
})

export default chainReactionApp
