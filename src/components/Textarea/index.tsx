import {ChangeEventHandler} from "react"
import {useControllableValue} from "../../hooks"
import {isInputEvent} from "../../utils"

interface Props {
	value?: string
	defaultValue?: string
	className?: string
	onChange?: ChangeEventHandler
}

function Textarea({value, defaultValue, className, onChange}: Props) {
	const [state, setState] = useControllableValue({
		value,
		defaultValue,
		onChange,
	})

	const handleChange = EventOrValue => {
		const nextValue = isInputEvent(EventOrValue)
			? EventOrValue.target.value
			: EventOrValue

		setState(nextValue)
	}
	return (
		<textarea
			className={`resize-none rounded-lg border bg-transparent p-2 tracking-wide outline-none ${className}`}
			spellCheck={false}
			value={state}
			onChange={handleChange}
		/>
	)
}

export default Textarea
