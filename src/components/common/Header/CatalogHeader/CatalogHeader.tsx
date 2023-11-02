import './CatalogHeader.scss'

export function CatalogHeader () {
	return (
		<div className='catalog-header'>
			<button className='catalog-header__btn'>
				<span>Каталог</span>
				<span className='catalog-header__btn-icon'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>
		</div>
	)
}
