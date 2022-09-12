interface Props {
	classname?: string
}

const SvgCheckCircel = ({classname, ...rest}: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		className={`h-4 w-4 text-green-500 ${classname}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
)

export default SvgCheckCircel
