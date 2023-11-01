import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import '../forms.scss'

interface TextareaPropsType {
	required?: boolean
	register: UseFormRegisterReturn
	title?: string
	error?: string
	placeholder?: string
	className?: string
}

export const Textarea: FC<TextareaPropsType> = ({
	title,
	register,
	required,
	error,
	placeholder = '',
	className,
}) => {
	return (
		<label
			className={`form-field ${required ? 'required' : ''} ${
				className ? className : ''
			}`}
		>
			<div className='form-field__inner'>
				{error && <p className='form-field__error'>{error}</p>}
				<textarea
					className='form-field__textarea'
					placeholder={placeholder}
					{...register}
				></textarea>
				{title && <p className='form-field__title'>{title}</p>}
			</div>
		</label>
	)
}
