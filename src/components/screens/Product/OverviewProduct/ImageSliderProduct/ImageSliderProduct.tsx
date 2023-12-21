'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { ProductImages } from '../../../../../redux/catalog/catalog.types';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import './ImageSliderProduct.scss';

type PropsType = {
	images: ProductImages[];
};

export default function ImageSliderProduct({ images }: PropsType) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

	return (
		<>
			<Swiper
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[Thumbs]}
				className='images-slider'
			>
				{images?.map((image, index) => (
					<SwiperSlide className='images-slider__slide' key={image.id}>
						<Image
							src={image.attributes.url}
							height={image.attributes.height}
							width={image.attributes.width}
							alt={`Product image ${index}`}
							className='images-slider__image'
						/>
					</SwiperSlide>
				))}
			</Swiper>
			{images.length > 1 && (
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					modules={[Thumbs]}
					className='images-slider__thumb'
				>
					{images?.map((image, index) => (
						<SwiperSlide className='images-slider__slide-thumb' key={image.id}>
							<Image
								src={image.attributes.url}
								height={image.attributes.height}
								width={image.attributes.width}
								alt={`Product image ${index}`}
								className='images-slider__image-thumb'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</>
	);
}
