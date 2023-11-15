type PropsType = {
	params: { category: string }
}

export default function CategoryPage({ params }: PropsType) {
	return <div>My Post: {params.category}</div>
}
