import { IProduct } from "../interfaces/product.interface"

const ProductCards = ({ products }: { products: IProduct[] }) => {
	return (
		<div className="flex flex-wrap gap-8 mt-4">
			{products &&
				products.map(({ id, title, description, price, images }) => (
					<a
						className="w-72 bg-gray-700 hover:-translate-y-2 
          transition-transform ease-in-out rounded-md"
						href={`/products/${id}`}
					>
						<div className="flex flex-col p-4">
							<h1 className="text-3xl font-bold">{title}</h1>
							<p className="text-gray-300">Price: {price}</p>
						</div>
						<img src={images[0]} alt={title} className="h-64 rounded-b-md" />
					</a>
				))}
		</div>
	)
}

export default ProductCards
