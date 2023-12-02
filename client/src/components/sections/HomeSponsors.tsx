import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dataAPI from '../../json/data.json';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';

const HomeSponsors = (): React.FunctionComponentElement<JSX.Element> => {
	const [sponsorsPathImg] = useState(dataAPI.sponsors);
	const [slidesPerView, setSlidesPerView] = useState(3);

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 700) {
				setSlidesPerView(1);
			} else if (window.innerWidth < 1000) {
				setSlidesPerView(2);
			} else {
				setSlidesPerView(3);
			}
		});
	}, []);

	return (
		<StyledComponent>
			<h1>Apoios</h1>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				mousewheel={true}
				loop={true}
				slidesPerView={slidesPerView}
				pagination={{ clickable: true }}
				spaceBetween={50}
				centeredSlides={true}
			>
				{sponsorsPathImg.map((sponsorPathImg, index: number) => (
					<SwiperSlide key={index}>
						<img src={`src/assets/images/Sponsors/${sponsorPathImg.image}`} alt={sponsorPathImg.image} />
					</SwiperSlide>
				))}
			</Swiper>
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

		.swiper-pagination {
			.swiper-pagination-bullet {
				background: var(--color-primary);
			}
		}
	}
`;

export default HomeSponsors;
