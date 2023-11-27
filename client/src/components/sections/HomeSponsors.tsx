import React from 'react';
import styled from 'styled-components';

const HomeSponsors = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<h1>Patrocinadores e Apoiadores</h1>
		<div className='swiper'>
			<div className='swiper-wrapper'></div>
			<div className='swiper-pagination'></div>
		</div>
	</StyledComponent>
);

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
