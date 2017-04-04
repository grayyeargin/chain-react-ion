export const INC_SCORE = 'INC_SCORE'
export const NEXT_LEVEL = 'NEXT_LEVEL'
export const SHOW_LAYOVER = 'SHOW_LAYOVER'
export const HIDE_LAYOVER = 'HIDE_LAYOVER'

export function increaseScore() {
	return {
		type: INC_SCORE
	}
}

export function nextLevel(curState) {
	let ballCount, percentNeeded, scoreNeeded;

	if (curState.level > 5) {
		ballCount = curState.ballCount - 5;
		percentNeeded = curState.percentNeeded;
	} else {
		ballCount = curState.ballCount + 10;
		percentNeeded = curState.percentNeeded + 0.2;
	}

	scoreNeeded = ballCount * percentNeeded;

	return {
		type: NEXT_LEVEL,
		scoreNeeded,
		ballCount,
		percentNeeded
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
