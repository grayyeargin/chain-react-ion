export const INC_SCORE = 'INC_SCORE'
export const NEXT_LEVEL = 'NEXT_LEVEL'
export const SHOW_LAYOVER = 'SHOW_LAYOVER'
export const HIDE_LAYOVER = 'HIDE_LAYOVER'

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
