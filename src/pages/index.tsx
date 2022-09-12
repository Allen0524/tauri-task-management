import {useState} from "react"
import {invoke} from "@tauri-apps/api/tauri"
import Image from "next/image"
import {Sidebar} from "../components"

function App() {
	async function greet() {
		// setGreetMsg(await invoke('greet', {name}))
	}

	return <div>main</div>
}

export default App
