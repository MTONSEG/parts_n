
import './Header.scss';
import { TopHeader } from './TopHeader/TopHeader';
import { MainHeader } from './MainHeader/MainHeader';
import { CatalogHeader } from './CatalogHeader/CatalogHeader';


export default function Header() {
	return (
		<header className='header'>
			<TopHeader />
			<MainHeader />
			<CatalogHeader />
		</header>
	)
}


