'use client'
import { useForm } from 'react-hook-form'
import { Input } from '../../../ui/forms/Input/Input'
import { Button } from '../../../ui/buttons/Button/Button'
import { useAppSelector } from '../../../../hooks/useTypedRedux'

type InputType = {
	email: string
}

export default function SubscribeFooter() {
	const data = useAppSelector(state => state.footer)
	const { register, handleSubmit } = useForm<InputType>()
	const onSubmit = () => {}

	return (
		<div className='subscribe-footer'>
			<h2 className='subscribe-footer__title'>{data.subTitle}</h2>
			<p className='subscribe-footer__text'>{data.subText}</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='subscribe-footer__form'
			>
				<Input
					type='email'
					register={register('email')}
					variant='black'
					placeholder={data.placeholder}
				/>
				<Button type='submit' ariaLabel='Subscribe on the notify'>
					{data.btnTitle}
				</Button>
			</form>
		</div>
	)
}
