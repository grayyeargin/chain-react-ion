export const INC_SCORE = 'INC_SCORE'
export const NEXT_LEVEL = 'NEXT_LEVEL'
export const SHOW_LAYOVER = 'SHOW_LAYOVER'
export const HIDE_LAYOVER = 'HIDE_LAYOVER'
export const ADD_BALLS = 'ADD_BALLS'
export const SET_UP = 'SET_UP'
export const ADD_EXP = 'ADD_EXP'
export const REMOVE_BALL = 'REMOVE_BALL'
export const SET_EXP_STATE = 'SET_EXP_STATE'
export const START = 'START'

import {ballColors} from '../components/helpers';
import Ball from '../components/ball';

export function increaseScore() {
	return {
		type: INC_SCORE
	}
}

export function start(opts) {

	let balls = createBalls({
		num: opts.ballCount,
		height: opts.height,
		width: opts.width
	});

	return {
		type: START,
		scoreNeeded: opts.scoreNeeded,
		ballCount: opts.ballCount,
		percentNeeded: opts.percentNeeded,
		balls
	}
}

export function nextLevel(opts) {
	let ballCount, percentNeeded, scoreNeeded, balls;

	if (opts.level > 5) {
		ballCount = opts.ballCount - 10;
		percentNeeded = opts.percentNeeded;
	} else {
		ballCount = opts.ballCount + 10;
		percentNeeded = opts.percentNeeded + 0.1;
	}

	scoreNeeded = Math.round(ballCount * percentNeeded);

	balls = createBalls({
		num: ballCount,
		height: opts.boardSettings.height,
		width: opts.boardSettings.width
	});

	return {
		type: NEXT_LEVEL,
		scoreNeeded,
		ballCount,
		percentNeeded,
		balls
	}
}

export function showLayover(view) {
	return {
		type: SHOW_LAYOVER,
		view
	}
}

export function hideLayover() {
	return {
		type: HIDE_LAYOVER
	}
}

export function setUpBoard(opts) {
	let balls = createBalls(opts);

	return {
		type: SET_UP,
		balls,
		context: opts.context
	}
}

export function setContext(context) {
	return {
		type: SET_CONTEXT,
		context
	}
}

export function addExplosion(exp) {
	return {
		type: ADD_EXP,
		exp
	}
}

export function removeBall(idx) {
	return {
		type: REMOVE_BALL,
		idx
	}
}

export function explodingState(isExp) {
	return {
		type: SET_EXP_STATE,
		isExp
	}
}

//Helpers

function createBalls(opts) {
	let balls = [];

	for (let i = 0; i < opts.num; i++) {
		let ball = new Ball({
			width: opts.width,
			height: opts.height,
			color: ballColors[Math.floor(Math.random() * ballColors.length)]
		});

		balls.push(ball);
	}

	return balls;
}
