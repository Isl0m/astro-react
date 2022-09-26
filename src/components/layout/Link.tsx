import cn from "classnames"
import { HeaderProps } from "./Header"

interface LinkProps extends HeaderProps {
	title: string
	href: string
	className?: string
	target?: string
}

const Link = ({ href, pathName, title, className, target }: LinkProps) => {
	return (
		<a
			className={cn(
				"hover:underline",
				{ ["text-sky-500"]: href === pathName },
				className
			)}
			href={href}
			target={target}
		>
			{title}
		</a>
	)
}

export default Link
