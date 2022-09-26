import { useState } from "react"
import MobileNav from "./MobileNav"
import Nav from "./Nav"

export interface HeaderProps {
	pathName: string
}

const Header = ({ pathName }: HeaderProps) => {
	const [open, setOpen] = useState<boolean>(false)
	const handleClick = () => {
		setOpen(!open)
	}
	return (
		<>
			<header className="fixed w-full text-white bg-gray-700 p-4 z-50">
				<div className=" flex items-center justify-between">
					<h1 className="flex gap-2">
						<img src="/favicon.svg" height={24} width={24} alt="logo" />
						<a href="/">Astro Project</a>
					</h1>
					<Nav pathName={pathName} />
					<button className="md:hidden block" onClick={handleClick}>
						<img src="/menu-icon.svg" height={24} width={24} />
					</button>
				</div>
				{open && <MobileNav pathName={pathName} />}
			</header>
		</>
	)
}
export default Header
