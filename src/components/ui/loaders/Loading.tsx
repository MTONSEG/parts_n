import { MoonLoader } from 'react-spinners'

export default function Loading() {
	return (
		<div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
			<MoonLoader color='#36d7b7' />
		</div>
	)
}
