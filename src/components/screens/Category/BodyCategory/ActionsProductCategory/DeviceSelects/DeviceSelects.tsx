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
	const { brands, models, series, currentDevice, activeDevices } = useAppSelector(
		state => state.product
	)
	const {
		setCurrentDeviceBrand,
		setCurrentDeviceSeries,
		setCurrentDeviceModel,
	} = useActions()

	return (
		<div className='hidden active md:static mb-[20px] '>
			<h2 className='px-[20px] pt-[16px] pb-[13px] text-center border-0 border-solid border-b-[1px] border-[#C8C8C8] ont-bold tracking-[0.2px] text-[24px] md:hidden'>
				Характеристики
			</h2>
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
