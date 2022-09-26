import { HeaderProps } from "./Header"
import Link from "./Link"

const Nav = ({ pathName }: HeaderProps) => {
	return (
		<>
			<nav className="hidden md:flex md:gap-4">
				<Link href="/" pathName={pathName} title="Home" />
				<Link href="/products" pathName={pathName} title="Products" />
				<Link href="/about" pathName={pathName} title="About" />
			</nav>
			<nav className="hidden md:flex md:gap-4">
				<Link
					pathName={pathName}
					href="https://t.me/dev_islom"
					target="_blank"
					title="Telegram"
				/>

				<Link
					pathName={pathName}
					href="https://github.com/Isl0m"
					target="_blank"
					title="GitHub"
				/>
			</nav>
		</>
	)
}

export default Nav
