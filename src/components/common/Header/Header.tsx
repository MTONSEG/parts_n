
import './Header.scss';
import { TopHeader } from './TopHeader/TopHeader';
import { MainHeader } from './MainHeader/MainHeader';


export default function Header() {
	return (
		<header className='header'>
			<TopHeader />
			<MainHeader />
		</header>
	)
}


