export function isArray(value) {
	return Array.isArray(value)
}

export function isObject(value) {
	const type = typeof value
	return value != null && type === "object" && !isArray(value)
}

export function isInputEvent(value) {
	return value && isObject(value) && isObject(value.target)
}
