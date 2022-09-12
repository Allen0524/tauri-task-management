import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import Link from "next/link"
import {useGetAllTasksQuery} from "../../services/taskApi"
import {SvgPlus, SvgSearch} from "../../assets/svg"
import {Dialog, Input, NewTask, TaskCard} from "../../components"

function Task() {
	const [isOpen, setIsOpen] = useState(false)
	const [searchValue, setSearchValue] = useState("")
	const {
		data: taskList,
		error,
		isLoading,
	} = useGetAllTasksQuery({
		filterByName: searchValue !== "",
		filterString: searchValue,
	})

	function handleOnSuccess() {
		setIsOpen(false)
	}

	function handleOnSearchValueChange(value) {
		setSearchValue(value)
	}

	return (
		<>
			<div className="flex h-full w-full flex-col space-y-5">
				<div className="flex items-center justify-between">
					<div className="flex w-96 items-center space-x-4 rounded-md border border-outline bg-surface p-2">
						<SvgSearch />
						<Input
							type="text"
							placeholder="尋找任務..."
							// defaultValue={searchValue}
							value={searchValue}
							onChange={handleOnSearchValueChange}
						/>
					</div>
					<SvgPlus onClick={() => setIsOpen(true)} />
				</div>
				<motion.section
					layout
					className="flex-1 space-y-10 overflow-y-auto rounded-lg p-1"
				>
					<AnimatePresence>
						{taskList?.map(task => (
							<Link
								key={task.id}
								href={`/task/${task.id}`}
								passHref
							>
								<TaskCard
									title={task.title}
									description={task.description}
								/>
							</Link>
						))}
					</AnimatePresence>
				</motion.section>
			</div>
			<AnimatePresence
				initial={false}
				exitBeforeEnter={true}
				onExitComplete={() => null}
			>
				{isOpen && (
					<Dialog title="add task" onDismiss={() => setIsOpen(false)}>
						<NewTask onSuccess={handleOnSuccess} />
					</Dialog>
				)}
			</AnimatePresence>
		</>
	)
}

export default Task
