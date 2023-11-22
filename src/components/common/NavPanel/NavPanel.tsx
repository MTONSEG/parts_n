'use client'
import './NavPanel.scss'
import Link from 'next/link'
import MatrixSVG from '@/icons/nav_panel/displays.svg'
import BatteriesSVG from '@/icons/nav_panel/accums.svg'
import DrivesSVG from '@/icons/nav_panel/hdd.svg'
import KeyboardsSVG from '@/icons/nav_panel/keyboards.svg'
import RamSVG from '@/icons/nav_panel/ram.svg'
import PowersSVG from '@/icons/nav_panel/powers.svg'
import { LinkNavPanel } from './LinkNavPanel/LinkNavPanel'

export default function NavPanel() {
	return (
		<nav className='nav-panel'>
			<div className='container'>
				<div className='nav-panel__row'>
					<LinkNavPanel title='Матрицы' path='/catalog/matrices'>
						<MatrixSVG />
					</LinkNavPanel>
					<LinkNavPanel title='Аккумуляторы' path='/catalog/batteries'>
						<BatteriesSVG />
					</LinkNavPanel>
					<LinkNavPanel title='Жесткие диски / SSD' path='/catalog/storages'>
						<DrivesSVG />
					</LinkNavPanel>
					<LinkNavPanel title='Клавиатуры' path='/catalog/keyboards'>
						<KeyboardsSVG />
					</LinkNavPanel>
					<LinkNavPanel title='Оперативная память' path='/catalog/rams'>
						<RamSVG />
					</LinkNavPanel>
					<LinkNavPanel title='Блоки питания' path='/catalog/powers'>
						<PowersSVG />
					</LinkNavPanel>
				</div>
			</div>
		</nav>
	)
}
