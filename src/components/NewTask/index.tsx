import {useEffect, useRef, useState} from "react"
import {useAddTaskMutation} from "../../services/taskApi"
import Button from "../Button"
import Input from "../Input"

function NewTask({onSuccess}: {onSuccess: () => void}) {
	const [addTask] = useAddTaskMutation()
	const [{title, description}, setValue] = useState({
		title: "",
		description: "",
	})
	const ref = useRef<HTMLInputElement>()

	const handleOnTitleChange = value => {
		setValue(old => ({...old, title: value}))
	}

	const handleOnDescriptionChange = event => {
		const {value} = event.target
		setValue(old => ({...old, description: value}))
	}

	const handleOnSubmit = async () => {
		if (title !== "") {
			// TODO: error handling
			await addTask({title, description})
			onSuccess()
		}
	}

	useEffect(() => {
		if (ref.current) ref.current.focus()
	}, [])

	return (
		<div className="flex h-full w-full flex-1 flex-col">
			<div className="flex h-full w-full flex-col space-y-5 p-3">
				<label className="w-full">
					標題
					<Input
						ref={ref}
						type="text"
						value={title}
						onChange={handleOnTitleChange}
						className=" border-outlin w-full rounded-md border p-1"
					/>
				</label>
				<label className="flex flex-1 flex-col">
					描述
					<textarea
						value={description}
						onChange={handleOnDescriptionChange}
						className=" h-full resize-none rounded-lg border bg-transparent p-2 tracking-wide outline-none"
					/>
				</label>
			</div>
			<div className=" self-end">
				<Button onClick={handleOnSubmit}>Add</Button>
			</div>
		</div>
	)
}

export default NewTask
