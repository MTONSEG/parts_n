import Markdown from 'react-markdown';
import './InfoProduct.scss';
import Link from 'next/link';
import { useMemo } from 'react';

interface PropsType {
	description: string;
}

export default function InfoProduct({ description }: PropsType) {
	const models: string[] = useMemo(() => {
		let arr = [];

		for (let i: number = 0; i < 18; i++) {
			arr.push(`A1369`);
		}

		return arr;
	}, []);

	const parts: string[] = useMemo(() => {
		let arr = [];

		for (let i: number = 0; i < 15; i++) {
			arr.push(`Asus 70-NXM1B2200Z`);
		}

		return arr;
	}, []);

	return (
		<section className='info-product'>
			<div className='container'>
				{description && (
					<article className='info-product__description'>
						<div className='info-product__description-wrap'>
							<p className='info-product__description-title'>Описание</p>
							<Markdown>{description}</Markdown>
						</div>

						<div className='info-product__info-text'>
							<p>
								*характеристики и комплектация товара могут отличаться, уточняйте у
								продавцов.
							</p>
							<p>
								*обратите внимание: изображение товара на сайте может отличаться от
								фактического изображения товара
							</p>
						</div>
					</article>
				)}

				<InfoModels
					title='Совместимые модели'
					variant='model'
					category='аккумулятор Asus'
					list={models}
				/>

				<InfoModels
					title='Совместимые парт номера'
					variant='part'
					category='аккумулятор Asus'
					list={parts}
				/>
			</div>
		</section>
	);
}

interface ItemModelProps {
	title: string;
	variant: 'model' | 'part';
}

interface InfoModelsProduct extends ItemModelProps {
	category: string;
	link?: string;
	list: string[];
}

function InfoModels({ title, variant, category, list, link = '#' }: InfoModelsProduct) {
	return (
		<div className='models-product'>
			<div className='models-product__head'>
				<h3 className='models-product__title'>
					{title} <span>{category}</span>
				</h3>

				<Link href={link} className='models-product__green-link'>
					<span>Смотреть полный список</span>
				</Link>
			</div>

			{variant === 'model' && (
				<div className='models-product__see'>
					<span className='models-product__green-link when-see'>Где посмотреть модель?</span>

					<p className='models-product__when-see'>
						Дед мне говорил, что где-то посмотреть, но я уже не помню где
					</p>
				</div>
			)}

			<ul className={`models-product__list ${variant}`}>
				{list?.map((el, index) => <ItemModel title={el} variant={variant} key={index} />)}
			</ul>
		</div>
	);
}

function ItemModel({ title, variant = 'model' }: ItemModelProps) {
	return (
		<li className={`models-product__item ${variant}`}>
			<span>{title}</span>
		</li>
	);
}
