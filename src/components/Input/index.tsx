import {forwardRef, ChangeEventHandler, HTMLInputTypeAttribute} from "react"
import {useControllableValue} from "../../hooks"
import {isInputEvent} from "../../utils"

interface InputProps {
	type: HTMLInputTypeAttribute
	value?: string
	defaultValue?: string
	placeholder?: string
	className?: string
	onChange?: ChangeEventHandler
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({type, placeholder, value, defaultValue, className, onChange}, ref) => {
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
			<input
				ref={ref}
				value={state}
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
				spellCheck={false}
				className={`flex-1 bg-transparent tracking-wide outline-none ${className}`}
			/>
		)
	},
)

Input.displayName = "Input"

export default Input
