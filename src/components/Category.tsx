import { ICategory } from "../interfaces/category.interface"

const Category = (props: ICategory) => {
	const { id, name, image } = props
	return (
		<a
			className="bg-gray-700 hover:-translate-y-2 transition-transform ease-in-out rounded-md w-64"
			href={`/categories/${id}`}
		>
			<img src={image} alt={name} className="rounded-t-md" />
			<h2 className="text-lg p-2 text-center">{name}</h2>
		</a>
	)
}

export default Category
