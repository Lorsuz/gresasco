import React, { useState } from 'react';
import styled from 'styled-components';
import dataAPI from '../../json/data.json';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeSponsors = (): React.FunctionComponentElement<JSX.Element> => {
	const [sponsorsPathImg] = useState(dataAPI.sponsors);

	return (
		<StyledComponent>
			<h1>Patrocinadores e Apoiadores</h1>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{sponsorsPathImg.map((sponsorPathImg, index: number) => (
					<SwiperSlide key={index}>
						<img src={`src/assets/images/Sponsors/${sponsorPathImg.image}`} alt={sponsorPathImg.image} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='swiper-pagination'></div>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	padding: 50px 0;
	margin: 0 auto;

	h1 {
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		font-family: Poppins, sans-serif;
		color: var(--color-primary-soft);
	}

	.swiper {
		display: block;
		max-width: 1700px;
		width: 100vw;
		.swiper-wrapper {
			height: 300px;

			.swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				border-radius: 5px;

				img {
					width: 350px;
					height: 200px;
					object-fit: scale-down;
				}
			}
		}

		// .swiper-button-prev {}

		// .swiper-button-next {}

		.swiper-pagination {
			.swiper-pagination-bullet {
				background: var(--color-primary);
			}
		}

		// .scrollbar {}
	}
`;

export default HomeSponsors;
