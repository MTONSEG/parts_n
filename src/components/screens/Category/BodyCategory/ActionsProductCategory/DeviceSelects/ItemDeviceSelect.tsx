'use client'
import { useEffect, useRef, useState } from 'react'
import Select, {
	ActionMeta,
	GroupBase,
	OptionProps,
	SingleValue,
} from 'react-select'
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
	const [isMounted, setIsMounted] = useState<boolean>(false)
	const { currentDevice, isMountSelect } = useAppSelector(
		state => state.product
	)
	const { toggleMountSelect } = useActions()
	const {
		setCurrentDeviceBrand,
		setCurrentDeviceModel,
		setCurrentDeviceSeries,
	} = useActions()

	const handleChange = (options: OptionProps) => {}

	useEffect(() => setIsMounted(true), [isMounted])

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
				options={options}
				placeholder={placeholder}
				className='dev-select'
				classNamePrefix='prefix-dev-select'
			/>
		</div>
	) : null
}
