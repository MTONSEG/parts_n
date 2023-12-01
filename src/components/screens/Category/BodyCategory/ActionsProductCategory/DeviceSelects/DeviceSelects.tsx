'use client'

import './DeviceSelects.scss'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../../hooks/useTypedRedux'
import ItemDeviceSelect from './ItemDeviceSelect'
import { useActions } from '../../../../../../hooks/useAction'

export default function DeviceSelects() {
	const dispatch = useAppDispatch()
	const { brands, models, series, currentDevice } = useAppSelector(
		state => state.product
	)
	const {
		setCurrentDeviceBrand,
		setCurrentDeviceSeries,
		setCurrentDeviceModel,
	} = useActions()

	return (
		<div className='flex mb-[20px]'>
			<ItemDeviceSelect
				title={brands.title}
				placeholder={brands.placeholder}
				options={brands.options}
				type='brand'
				handleStateChange={setCurrentDeviceBrand}
			/>
			<ItemDeviceSelect
				title={series.title}
				placeholder={series.placeholder}
				options={series.options}
				type='series'
				disable={currentDevice.brand ? false : true}
				handleStateChange={setCurrentDeviceSeries}
			/>
			<ItemDeviceSelect
				title={models.title}
				placeholder={models.placeholder}
				options={models.options}
				type='model'
				disable={currentDevice.series ? false : true}
				handleStateChange={setCurrentDeviceModel}
			/>
		</div>
	)
}
