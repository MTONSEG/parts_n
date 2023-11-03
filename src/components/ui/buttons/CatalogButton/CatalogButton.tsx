
import './CatalogButton.scss'
import { useActions, useAppSelector } from '../../../../hooks/useRedux'

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
