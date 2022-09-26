import type { IProduct } from "../../interfaces/product.interface"

const ProductCards = ({ id, title, price, images }: IProduct) => {
	return (
		<a
			className="w-72 bg-gray-700 hover:-translate-y-2 
          transition-transform ease-in-out rounded-md"
			href={`/products/${id}`}
			key={id}
		>
			<div className="flex flex-col p-4">
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="text-gray-300">Price: {price}</p>
			</div>
			<img src={images[0]} alt={title} className="h-64 rounded-b-md" />
		</a>
	)
}

export default ProductCards
