'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '@/hooks/useRedux'
import './ContactsForms.scss'
import { Input } from '../../../ui/forms/Input/Input'
import { Textarea } from '../../../ui/forms/Textarea/Textarea'
import { error } from 'console'
import { useEffect } from 'react'
import { Button } from '../../../ui/buttons/Button/Button'

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

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isValid },
	} = useForm<InputForm>()

	const onSubmit: SubmitHandler<InputForm> = data => {
		console.log(JSON.stringify({ data: { ...data } }))

		fetch('http://localhost:1337/api/feedbacks', {
			method: 'POST',
			body: JSON.stringify({ data: data }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				reset()
			})
			.catch((error: Error) => {
				console.log(error.message)
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='contacts-form'>
			<div className='contacts-form__body'>
				<Input
					title={inputName.title}
					placeholder={inputName.placeholder}
					register={register('name', {
						required: inputName.requiredMess,
					})}
					required
					error={errors?.name && errors?.name?.message}
				/>
				<Input
					title={inputEmail.title}
					placeholder={inputEmail.placeholder}
					register={register('email', {
						required: inputEmail.requiredMess,
					})}
					error={errors.email ? errors.email.message : ''}
					required
				/>
				<Input
					title={inputTel.title}
					placeholder={inputTel.placeholder}
					register={register('tel')}
					error={errors.email ? errors.email.message : ''}
					type='tel'
				/>
				<Textarea
					title={inputComment.title}
					placeholder={inputComment.placeholder}
					register={register('comment', {
						required: inputComment.requiredMess,
					})}
					error={errors.comment && errors.comment.message}
					required
					className='contacts-form__comment'
				/>
			</div>
			<Button type='submit' className='contacts-form__btn'>
				Отправить
			</Button>
		</form>
	)
}
