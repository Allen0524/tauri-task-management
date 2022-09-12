import {useRef, useState} from "react"
import {motion} from "framer-motion"
import Link from "next/link"
import {useRouter} from "next/router"
import {
	SvgArrowLeft,
	SvgCheckCircel,
	SvgSpinner,
	SvgDelete,
} from "../../assets/svg"
import {Input, Textarea} from "../../components"
import {useGetTaskQuery, useUpdateTaskMutation} from "../../services/taskApi"

function Task() {
	const router = useRouter()
	const {id} = router.query

	const {
		data: task,
		error,
		isLoading,
	} = useGetTaskQuery(id, {
		skip: id === undefined,
	})

	const {title, description} = task ?? {}

	return (
		<div className="">
			<Link href="/task" passHref>
				<div>
					<a className="inline-block">
						<SvgArrowLeft />
					</a>
				</div>
			</Link>
			{isLoading ? null : (
				<Content id={id} title={title} description={description} />
			)}
		</div>
	)
}

function Content({
	id,
	title,
	description,
}: {
	id: string | string[]
	title: string
	description: string
}) {
	const [titleState, setTitleState] = useState(title)
	const [descriptionState, setDescriptionState] = useState(description)
	const timer = useRef({
		title: null,
		description: null,
	})

	const [updateTask, {isLoading: isUpdating, isSuccess}] =
		useUpdateTaskMutation()

	console.log({isUpdating, isSuccess})

	const updateTitle = async value => {
		// TODO: 可能不需要 setState, 用ref拿資料
		setTitleState(value)

		// debounce set to DB
		clearTimeout(timer.current.title)
		timer.current.title = setTimeout(() => {
			updateTask({id: Number(id), title: value, description})
			clearTimeout(timer.current.title)
		}, 1000)
	}

	const updateDescription = async value => {
		setDescriptionState(value)

		clearTimeout(timer.current.description)
		timer.current.description = setTimeout(() => {
			updateTask({id: Number(id), title, description: value})
			clearTimeout(timer.current.description)
		}, 1000)
	}

	return (
		<div className="flex h-full flex-col p-9">
			<div className=" self-end">
				<SvgDelete
					onClick={() => {
						console.log("eee")
					}}
				/>
			</div>
			<div className="flex items-center">
				<Input type="text" value={titleState} onChange={updateTitle} />
				<StatusIcon isUpdating={isUpdating} />
			</div>
			<div className="flex flex-col rounded-lg border">
				<Textarea
					className="h-full w-full rounded-sm border-none"
					value={descriptionState}
					onChange={updateDescription}
				/>
				<StatusIcon isUpdating={isUpdating} />
			</div>
		</div>
	)
}

function StatusIcon({isUpdating}: {isUpdating: boolean}) {
	return (
		<div className="h-4 self-end">
			{isUpdating ? (
				<SvgSpinner />
			) : (
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1, transitionEnd: {display: "none"}}}
					exit={{opacity: 0}}
					transition={{duration: 1.5, ease: "easeInOut"}}
				>
					<SvgCheckCircel />
				</motion.div>
			)}
		</div>
	)
}

export default Task
