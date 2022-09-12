import {useState, ChangeEvent} from "react"

interface Props<T> {
	value?: T
	defaultValue?: T
	onChange?: (v: T | ChangeEvent) => void
}

function useControllableValue<T>(props: Props<T>) {
	const {
		value: valueProp = undefined,
		defaultValue = undefined,
		onChange,
	} = props

	const isControlled = valueProp !== undefined
	const [uncontrolledState, setUncontrolledState] = useState(defaultValue)

	const value = isControlled ? valueProp : uncontrolledState

	const handleSetState = v => {
		if (!isControlled) {
			setUncontrolledState(v)
		}
		if (isControlled) {
			onChange(v)
		}
	}

	return [value, handleSetState] as const
}

export default useControllableValue
