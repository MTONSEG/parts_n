import type { Metadata } from 'next'
import { Breadcrumbs } from '../../../components/common/Breadcrumbs/Breadcrumbs'
import type { ILink } from '../../../ts_types/types'
import Image from 'next/image'
import './warranty.scss'

export const metadata: Metadata = {
	title: 'Warranties | NOUT PARTS',
}

export default function Warranty() {
	const breadcrumbs: ILink[] = [
		{
			title: 'Гарантии',
			path: '#',
		},
	]

	return (
		<>
			<Breadcrumbs links={breadcrumbs} />
			<div className='warranty'>
				<div className='container'>
					<div className='warranty__row'>
						<h1 className='warranty__title'>Гарантии</h1>
						<div className='warranty__section'>
							<h2 className='warranty__section-title'>
								1. Общие положения
							</h2>
							<div className='warranty__section-body'>
								<h3 className='warranty__section-subtitle'>
									Компания Noutparts предоставляет гарантию на все
									товары, продаваемые в нашем интернет магазине.
								</h3>
								<ul className='warranty__section-list'>
									<li className='warranty__section-item'>
										<span>1.1.</span> Все товары проходят
										тестирование: при поступлении на наш склад и
										непосредственно перед отправкой покупателю.
									</li>
									<li className='warranty__section-item'>
										<span>1.2.</span> Любой товар, не подлежащий
										тестированию, проходит процедуру тщательного
										осмотра. .
									</li>
									<li className='warranty__section-item'>
										<span>1.3.</span> На все группы
										товаров распространяется гарантия от 3 месяцев до
										12 месяцев со дня получения товара покупателем, на
										разные группы товаров срок гарантии указан в
										характеристике товара.
									</li>
									<li className='warranty__section-item'>
										<span>1.4.</span> Продавец обязуется бесплатно
										устранить дефекты товара посредством ремонта или
										замены на аналогичный товар при условии, что
										дефект возник по вине Продавца или является
										производственным браком, в течение гарантийного
										срока.
									</li>
									<li className='warranty__section-item'>
										<span>1.5.</span> Интернет-магазин Unisfere не
										берет на себя обязательств по замене гарантийного
										товара на аналогичный на время ремонта или
										диагностики, за исключением отдельных случаев
										которые оговариваются в отдельном порядке с
										уполномоченным представителем интернет-магазина.
									</li>
									<li className='warranty__section-item'>
										<span>1.6.</span> Право на гарантийное
										обслуживание имеет только непосредственный
										покупатель товара.
									</li>
								</ul>
							</div>
						</div>
						<div className='warranty__section'>
							<h2 className='warranty__section-title'>
								2. Возврат и обмен
							</h2>
							<div className='warranty__section-body'>
								<h3 className='warranty__section-subtitle warranty__section-subtitle_second'>
									На все товары, купленные в нашем магазине,
									распространяется действие Закона Украины "О защите
									прав потребителей". Согласно статьи 9 Закона, товар
									надлежащего качества (без дефектов) может быть
									обменен или возвращен в магазин в течение 14 дней, не
									считая дня покупки, если соблюдены следующие условия:
								</h3>
								<ul className='warranty__section-list'>
									<li className='warranty__section-item warranty__section-item_disc'>
										присутствуют все документы на товар (инструкции,
										гарантийный талон, квитанция либо товарный чек,
										подтверждающие покупку); 
									</li>
									<li className='warranty__section-item  warranty__section-item_disc'>
										товарный вид сохранен, то есть, остались все
										ярлыки, упаковка, наклейки и прочие принадлежности
										товара в неизменном виде;
									</li>
									<li className='warranty__section-item  warranty__section-item_disc'>
										товаров, имеющих внешние дефекты (явные
										механические или термические повреждения, трещины,
										сломанные контактные группы и/или разъемы) любого
										элемента товара;
									</li>
									<li className='warranty__section-item  warranty__section-item_disc'>
										если количество битых (неработающих) пикселей
										матрицы соответствует стандарту ISO 13406-2;
									</li>
									<li className='warranty__section-item  warranty__section-item_disc'>
										товар не использовался.
									</li>
								</ul>
								<p className='warranty__section-text'>
									Мы ценим свое имя, надежного и качественного
									поставщика качественных товаров, и уделяем повышенное
									внимание любому Вашему обращению.
								</p>
							</div>
						</div>
						<div className='warranty__section'>
							<h2 className='warranty__section-title'>
								3. Процедура возврата средств
							</h2>
							<div className='warranty__section-body'>
								<ul className='warranty__section-list'>
									<li className='warranty__section-item  warranty__section-item_num'>
										Установление факта распространения услуги на
										данный товар.
									</li>
									<li className='warranty__section-item  warranty__section-item_num'>
										Передача товара гарантийному отделу магазина, в
										котором он был приобретен.
									</li>
									<li className='warranty__section-item  warranty__section-item_num'>
										Сотрудники отдела производят внешний осмотр, а в
										случаях когда это необходимо – проверку
										работоспособности. После этого они принимают
										решение о возможности возврата средств.
									</li>
									<li className='warranty__section-item  warranty__section-item_num'>
										Оформление возврата денег в месте покупки товара.
										Деньги могут быть возвращены в рабочий день (с
										понедельника по пятницу) с 09:00 до 18:00.
									</li>
								</ul>
							</div>
						</div>
						<div className='warranty__bonus'>
							<Image
								src='/icons/bonus.svg'
								width={78}
								height={88}
								alt='bonus'
								className='warranty__icon'
							/>
							<div className='warranty__text-wrap'>
								<h3>Бонус для постоянных клиентов</h3>
								<p>
									Постоянные клиенты могут рассчитывать на упрощенную
									систему по обмену бракованного товара. Благодаря
									этому проблема решается в самые сжатые сроки с
									минимумом издержек.
								</p>
							</div>
							<Image
								src='/icons/warranty_bonus_line.svg'
								width={178}
								height={144}
								alt='bonus'
								className='warranty__line warranty__line_left'
							/>

							<Image
								src='/icons/warranty_bonus_line2.svg'
								width={161}
								height={131}
								alt='bonus'
								className='warranty__line warranty__line_right'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
