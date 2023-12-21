import { useState } from 'react';
import './BuyOneClickForm.scss';
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';
import { Button } from '../../../../ui/buttons/Button/Button';

export default function BuyOneClickForm() {
	const [value, setValue] = useState<string>('');

	const handleChange = (e: InputMaskChangeEvent) => {
		setValue(e.target.value || '');
	};

	return (
		<form className='buy-one-click' onSubmit={() => {}}>
			<InputMask
				value={value}
				onChange={handleChange}
				mask=' 99 (999) 999-99-99'
				placeholder='38 (0XX) XXX-XX-XX'
				className='buy-one-click__input'
			/>
			<Button variant='square' className='buy-one-click__btn'>
				Купить в один клик
			</Button>
		</form>
	);
}
