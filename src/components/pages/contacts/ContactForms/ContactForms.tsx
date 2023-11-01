'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '@/hooks/useRedux'
import './ContactsForms.scss'
import { Input } from '../../../ui/forms/Input/Input'
import { Textarea } from '../../../ui/forms/Textarea/Textarea'

type InputForm = {
	name: string
	email: string
	tel: number
	comment: string
}

export function ContactsForm() {
	const { inputComment, inputEmail, inputName, inputTel } = useAppSelector(
		state => state.contacts
	)

	const { register, handleSubmit } = useForm<InputForm>({})

	const onSubmit: SubmitHandler<InputForm> = data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='contacts-form'>
			<div className='contacts-form__body'>
				<Input
					title={inputName.title}
					placeholder={inputName.placeholder}
					register={register('name', {
						required: inputName.required,
					})}
					required
				/>
				<Input
					title={inputEmail.title}
					placeholder={inputEmail.placeholder}
					register={register('email', {
						required: inputEmail.required,
					})}
					required
				/>
				<Input
					title={inputTel.title}
					placeholder={inputTel.placeholder}
					register={register('tel', {
						required: inputTel.required,
					})}
				/>
				<Textarea
					title={inputComment.title}
					placeholder={inputComment.placeholder}
					register={register('comment', {
						required: inputComment.required,
					})}
					required
					className='contacts-form__comment'
				/>
			</div>
			<button type='submit'>Отправить</button>
		</form>
	)
}
