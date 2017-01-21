export const INC_SCORE = 'INC_SCORE'
export const NEXT_LEVEL = 'NEXT_LEVEL'
export const UPDATE_LAYOVER = 'UPDATE_LAYOVER'

export function increaseScore() {
	return {
		type: INC_SCORE
	}
}

export function nextLevel() {
	return {
		type: NEXT_LEVEL
	}
}

export function updateLayover(showLayover) {
	return {
		type: UPDATE_LAYOVER,
		showLayover
	}
}
