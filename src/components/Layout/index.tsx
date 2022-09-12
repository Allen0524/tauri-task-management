import {ReactNode} from "react"
import Sidebar from "../SideBar"

function Layout({children}: {children: ReactNode}) {
	return (
		<div className="flex h-screen w-screen overflow-hidden bg-background text-text">
			<Sidebar />
			<main className="m-5 flex-1">{children}</main>
		</div>
	)
}

export default Layout
