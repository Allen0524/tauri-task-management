import {ReactNode} from "react"
import {motion} from "framer-motion"
import {SvgXCircel} from "../../assets/svg"

interface DialogProps {
	title: string
	onDismiss: () => void
	children: ReactNode
}

function Dialog({title = "title", onDismiss, children}: DialogProps) {
	return (
		<Backdrop onClick={onDismiss}>
			<motion.div
				variants={{
					hidden: {
						scale: 0.1,
					},
					visible: {
						scale: 1,
						transition: {
							type: "spring",
							duration: 0.5,
						},
					},
					exit: {
						scale: 0.1,
						opacity: 0,
					},
				}}
				initial="hidden"
				animate="visible"
				exit="exit"
				onClick={e => e.stopPropagation()}
				className="flex h-1/2 w-1/2 flex-col space-y-2 rounded-xl border-2 border-outline bg-surface p-5 "
			>
				{/* title start */}
				<div className="flex items-center justify-between">
					{title}
					<SvgXCircel
						className="mt-[-27px] mr-[-10px] cursor-pointer hover:scale-110"
						onClick={() => onDismiss()}
					/>
				</div>
				{/* title end */}

				{/* content start */}
				<div className="flex-1">{children}</div>
				{/* content end */}
			</motion.div>
		</Backdrop>
	)
}

// TODO: clamp
function Backdrop({
	children,
	onClick,
}: {
	children: ReactNode
	onClick: () => void
}) {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			onClick={onClick}
			className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm"
		>
			{children}
		</motion.div>
	)
}

export default Dialog
