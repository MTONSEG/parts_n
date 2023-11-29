'use client'
import { useEffect, useState } from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'
import { ItemSelectType } from '../../../../../../models/models'
import './DeviceSelects.scss'
import { useAppSelector } from '../../../../../../hooks/useTypedRedux'
import { useActions } from '../../../../../../hooks/useAction'

interface PropsType {
	placeholder?: string
	title?: string
	options: ItemSelectType[]
	type: 'brand' | 'series' | 'model'
}

export default function ItemDeviceSelect({
	placeholder = 'Выбрать...',
	options,
	title,
	type,
}: PropsType) {
	const id = Date.now().toString()
	const [isMounted, setIsMounted] = useState<boolean>(true)
	useEffect(() => setIsMounted(true), [])
	const { currentDevice } = useAppSelector(state => state.product)
	const {
		setCurrentDeviceBrand,
		setCurrentDeviceModel,
		setCurrentDeviceSeries,
	} = useActions()

	const handleChange = (
		newValue: SingleValue<string>,
		actionMeta: ActionMeta<string>
	) => {
		// if(type === 'brand') {setCurrentDeviceBrand(newValue)}
		console.log(newValue);
		
	}

	return isMounted ? (
		<div className='md:mr-[40px] last:mr-0'>
			{title && <p className='md:mb-[8px]'>{title}</p>}
			<Select
				id={id}
				styles={{
					control: (base, state) => ({
						...base,
					}),
					option: (base, { isFocused, isSelected }) => ({
						...base,
						':hover': {
							background: isFocused ? '#a6dfb6' : '',
						},
						background: isSelected ? '#36DD65' : '',
					}),
				}}
				// options={options}
				value={currentDevice[type]}
				placeholder={placeholder}
				className='dev-select'
				classNamePrefix='prefix-dev-select'
				onChange={handleChange}
			/>
		</div>
	) : null
}
