import { ReactNode } from "react"
import cn from "classnames"

interface DropdownMenuItemProps {
	href: string
	children?: ReactNode
	key?: string
}

const DropdownMenuItem = ({ href, children }: DropdownMenuItemProps) => {
	return (
		<li className="list-none">
			<a
				href={href}
				className={cn("hover:bg-gray-700 block px-4 py-2 text-sm")}
			>
				{children}
			</a>
		</li>
	)
}
export default DropdownMenuItem
