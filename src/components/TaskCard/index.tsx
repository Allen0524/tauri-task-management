import {forwardRef} from "react"
import {motion} from "framer-motion"

type TaskCardProps = {
	title: string
	href?: string
	description?: string
}

const TaskCard = forwardRef<HTMLAnchorElement, TaskCardProps>(
	({title, href, description}, ref) => {
		return (
			<motion.a
				layout
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				ref={ref}
				href={href}
				className=" block cursor-pointer rounded-sm border border-outline bg-surface p-6 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-secondary/10"
			>
				{title}
			</motion.a>
		)
	},
)

TaskCard.displayName = "TaskCard"

export default TaskCard
