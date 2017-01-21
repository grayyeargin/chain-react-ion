import { combineReducers } from 'redux'

import { INC_SCORE } from './actions'

// Map of application state structure
const initialState = {
	score: 0
}

function score(state = initialState.score, action) {
	switch (action.type) {
		case INC_SCORE:
			return state + 1
		default:
			return state
	}
}

const chainReactionApp = combineReducers({
	score
})

export default chainReactionApp
