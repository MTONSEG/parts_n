import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import '../forms.scss'

interface InputPropsType {
	required?: boolean
	register: UseFormRegisterReturn
	title?: string
	error?: string
	placeholder?: string
	type?: 'text' | 'number' | 'tel' | 'email'
	className?: string,
	variant?: 'white'|'black'
}

export const Input: FC<InputPropsType> = ({
	title,
	register,
	required,
	error,
	placeholder = '',
	type = 'text',
	className,
	variant = 'white'
}) => {
	return (
		<label
			className={`form-field ${required ? 'required' : ''} ${
				className ? className : ''
			}`}
		>
			<div className={`form-field__inner ${error ? 'error' : ''}`}>
				{error && <p className='form-field__error'>{error}</p>}
				<input
					type={type}
					className={`form-field__input form-field__input_${variant}`}
					placeholder={placeholder}
					{...register}
				/>
				{title && <p className='form-field__title'>{title}</p>}
			</div>
		</label>
	)
}
