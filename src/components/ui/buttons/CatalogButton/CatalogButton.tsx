import './CatalogButton.scss'
import { useAppSelector } from '../../../../hooks/useTypedRedux'
import { useActions } from '../../../../hooks/useAction'

type CatalogButtonType = {
	title: string
}

export function CatalogButton({ title }: CatalogButtonType) {
	const { toggleCatalog } = useActions()
	const { activeCatalog } = useAppSelector(state => state.header)

	return (
		<button
			className={`catalog-btn ${activeCatalog ? 'active' : ''}`}
			onClick={() => {
				toggleCatalog()
			}}
		>
			<span>{title}</span>
			<span className='catalog-btn__icon'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</span>
		</button>
	)
}
