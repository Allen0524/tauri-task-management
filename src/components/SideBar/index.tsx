import Link from "next/link"
import ToggleMenu from "../ToggleMenu"

function Sidebar() {
	return (
		<nav className="border border-transparent border-r-outline p-3">
			<ul className="hidden w-36 flex-col items-start space-y-2 md:flex">
				<li className="cursor-pointer">
					<Link href="/task">任務</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/tool">工具</Link>
				</li>
			</ul>
			<ToggleMenu />
		</nav>
	)
}

export default Sidebar
