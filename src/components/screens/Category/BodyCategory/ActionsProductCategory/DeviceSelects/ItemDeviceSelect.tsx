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
	disable?: boolean
	type: 'brand' | 'series' | 'model'
	handleStateChange: (payload: string | number) => void
}

export default function ItemDeviceSelect({
	placeholder = 'Выбрать...',
	options,
	title,
	type,
	disable,
	handleStateChange,
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

	const handleChange = (
		newValue: SingleValue<ItemSelectType>,
		actionMeta: ActionMeta<ItemSelectType>
	): void => {
		console.log(newValue, actionMeta)

		

		if (newValue) handleStateChange(newValue.label)
	}

	useEffect(() => setIsMounted(true), [isMounted])

	return isMounted ? (
		<div
			className={`inner-select md:mr-[40px] last:mr-0 relative ${
				disable ? 'pointer-events-none opacity-50' : ''
			}`}
		>
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
							background:
								isFocused && isSelected ? '#36DD65' : '#a6dfb6',
						},
						background: isSelected ? '#36DD65' : '',
					}),
				}}
				options={options}
				placeholder={placeholder}
				className='dev-select'
				classNamePrefix='prefix-dev-select'
				onChange={handleChange}
			/>
		</div>
	) : null
}
