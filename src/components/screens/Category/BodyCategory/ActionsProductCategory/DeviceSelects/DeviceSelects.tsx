'use client'

import './DeviceSelects.scss'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../../hooks/useTypedRedux'
import ItemDeviceSelect from './ItemDeviceSelect'

export default function DeviceSelects() {
	const dispatch = useAppDispatch()
	const { brands, models, series, status } = useAppSelector(
		state => state.product
	)

	return (
		<div className='flex mb-[20px]'>
			<ItemDeviceSelect
				title={brands.title}
				placeholder={brands.placeholder}
				options={brands.options}
				type='brand'
			/>
			<ItemDeviceSelect
				title={series.title}
				placeholder={series.placeholder}
				options={series.options}
				type='series'
			/>
			<ItemDeviceSelect
				title={models.title}
				placeholder={models.placeholder}
				options={models.options}
				type='model'
			/>
		</div>
	)
}
