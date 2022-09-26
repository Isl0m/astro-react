import type { IProduct } from "../../interfaces/product.interface"

const Category = (props: IProduct) => {
	const { id, title, description, images, price } = props
	return (
		<div className="">
			<h1 className="text-3xl font-bold">{title}</h1>
			<p className="text-gray-300 mt-2">{description}</p>
			<p className="text-gray-300">Price: {price}</p>
			<div className="flex flex-wrap gap-8 mt-4 ">
				{images.map((image) => (
					<img
						src={image}
						key={title}
						alt={title}
						className="rounded-md h-64"
					/>
				))}
			</div>
		</div>
	)
}

export default Category
