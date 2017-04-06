import { combineReducers } from 'redux'

import { INC_SCORE, NEXT_LEVEL, HIDE_LAYOVER, SHOW_LAYOVER, ADD_BALLS, SET_UP, ADD_EXP, REMOVE_BALL, SET_EXP_STATE, START } from './actions'

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
	},
	balls: [],
	context: null
}

function score(state = initialState.score, action) {
	switch (action.type) {
		case INC_SCORE:
			return state + 1
		case NEXT_LEVEL:
		 return 0
		case START:
		 return 0
		default:
			return state
	}
}

function scoreNeeded(state = initialState.scoreNeeded, action) {
	switch (action.type) {
		case NEXT_LEVEL:
			return action.scoreNeeded
		case START:
			return action.scoreNeeded
		default:
			return state
	}
}

function level(state = initialState.level, action) {
	switch (action.type) {
		case START:
			return 1
		case NEXT_LEVEL:
			return state + 1
		default:
			return state
	}
}

function ballCount(state = initialState.ballCount, action) {
	switch (action.type) {
		case START:
			return action.ballCount
		case NEXT_LEVEL:
			return action.ballCount
		default:
			return state
	}
}

function percentNeeded(state = initialState.percentNeeded, action) {
	switch (action.type) {
		case START:
			return action.percentNeeded
		case NEXT_LEVEL:
			return action.percentNeeded
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

function balls(state = initialState.balls, action) {
	switch (action.type) {
		case SET_UP:
			return action.balls
		case ADD_BALLS:
			return action.balls
		case REMOVE_BALL:
			return [
				...state.slice(0, action.idx),
				...state.slice(action.idx + 1)
			]
		case NEXT_LEVEL:
			return action.balls
		case START:
			return action.balls
		default:
			return state
	}
}

function context(state = initialState.context, action) {
	switch (action.type) {
		case SET_UP:
			return action.context
		default:
			return state
	}
}

function boardSettings(state = {}, action) {
			return state
}

function explosions(state = [], action) {
		switch (action.type) {
			case ADD_EXP:
				return [...state, action.exp]
			default:
				return state
		}
}

function exploding(state = false, action) {
	switch (action.type) {
		case SET_EXP_STATE:
			return action.isExp
		default:
			return state
	}
}

const chainReactionApp = combineReducers({
	score,
	scoreNeeded,
	level,
	ballCount,
	percentNeeded,
	layover,
	balls,
	context,
	boardSettings,
	explosions,
	exploding
})

export default chainReactionApp
