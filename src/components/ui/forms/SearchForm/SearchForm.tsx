import './SearchForm.scss'
import SearchSVG from '@/icons/search.svg'

export function SearchForm() {
	return (
		<div className='search-form'>
			<div className='search-form__input-inner'>
				<input
					type='text'
					className='search-form__input'
					placeholder='Поиск по каталогу..'
				/>
				<button className='search-form__input-btn' aria-label='Search'>
					<SearchSVG />
				</button>
			</div>
		</div>
	)
}
