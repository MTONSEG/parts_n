import Category from '../../../components/screens/Category/Category'
type PropsType = {
	params: { category: string }
}
export default function CategoryPage({ params }: PropsType) {
	return <Category params={params}/>
}
