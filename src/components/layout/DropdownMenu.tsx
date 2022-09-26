import { BsList } from "react-icons/bs/index"
import { useState } from "react"
import DropdownMenuItem from "./DropdownMenuItem"

interface Props {
	tags: string[]
}

const DropdownMenu = ({ tags }: Props) => {
	const [open, setOpen] = useState<boolean>(false)
	const handleOpen = () => {
		setOpen(!open)
	}
	return (
		<div className="relative inline-block text-left md:hidden">
			<div>
				<button
					onClick={handleOpen}
					className="inline-flex justify-center rounded-md border border-gray-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
				>
					<BsList size={18} />
				</button>
			</div>

			{open && (
				<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-gray-700 bg-gray-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-gray-700">
					<div className="py-1">
						<div className="px-3 py-2 uppercase font-bold text-xs">Pages</div>
						{tags.map((tag) => {
							return (
								<DropdownMenuItem key={tag} href={`/${tag.toLowerCase()}`}>
									{tag}
								</DropdownMenuItem>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}
export default DropdownMenu
