import {ReactNode} from "react"
import {motion} from "framer-motion"

interface ButtonProps {
	children: ReactNode
	onClick: () => void
}

function Button({children, onClick}: ButtonProps) {
	return (
		<motion.button
			whileHover={{scale: 1.1}}
			whileTap={{scale: 1}}
			className="text-cente rounded-md border border-outline bg-black px-5 py-2 text-text shadow-2xl"
			onClick={onClick}
		>
			{children}
		</motion.button>
	)
}

export default Button
