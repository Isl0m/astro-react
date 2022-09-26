const Header = () => {
	return (
		<header
			className="fixed w-full flex items-center justify-between 
     text-white bg-gray-700 p-4 z-50"
		>
			<h1 className="flex gap-2">
				<img src="/favicon.svg" height={24} width={24} alt="logo" />
				<a href="/">Astro Project</a>
			</h1>
			<nav className="flex gap-4">
				<a href="/" className="hover:text-sky-500">
					Home
				</a>
				<a href="/products" className="hover:text-sky-500">
					Products
				</a>
				<a href="/about" className="hover:text-sky-500">
					About
				</a>
			</nav>
			<nav className="flex gap-4">
				<a
					className="hover:text-sky-500"
					href="https://t.me/dev_islom"
					target="_blank"
				>
					Telegram
				</a>
				<a
					className="hover:text-sky-500"
					href="https://github.com/Isl0m"
					target="_blank"
				>
					GitHub
				</a>
			</nav>
		</header>
	)
}
export default Header
