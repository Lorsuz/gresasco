import React, { useEffect, useRef, useState } from 'react';
import dataJson from '../../json/data.json';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

import styled from 'styled-components';
const HomeBanner = (): React.FunctionComponentElement<JSX.Element> => {
	const [banners] = useState(dataJson.banner);
	const [current, setCurrent] = useState(0);
	const length = banners.length;
	const initAutoPlayInterval = useRef<number>();

	const changeSlide = (newSlide: number): void => {
		setCurrent(prev => (prev + newSlide < 0 ? length - 1 : (prev + newSlide) % length));
		resetInterval();
	};

	const initAutoPlay = (): void => {
		initAutoPlayInterval.current = setInterval(() => {
			setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
		}, 2000);
	};

	const resetInterval = (): void => {
		clearInterval(initAutoPlayInterval.current);
		initAutoPlay();
	};

	useEffect(() => {
		initAutoPlay();
		return () => {
			clearInterval(initAutoPlayInterval.current);
		};
	}, [current, length]);

	return (
		<StyledComponent>
			<ul className='slides'>
				<li className='slide'>
					<div className='img'>
						<img src={`src/assets/images/banner/${banners[current].image}`} alt={banners[current].image} />
					</div>
				</li>
			</ul>
			<button className='prev' onClick={() => changeSlide(-1)}>
				<GoTriangleLeft />
			</button>
			<button className='next' onClick={() => changeSlide(1)}>
				<GoTriangleRight />
			</button>
			<ul className='pagination'>
				{Array.from({ length: banners.length }).map((item, index) => (
					<li key={index} className={index === current ? 'dot active' : 'dot'} onClick={() => setCurrent(index)}></li>
				))}
			</ul>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	position: relative;
	height: 100vh;
	min-height: 200px;
	width: 100%;
	overflow: hidden;
	margin-bottom: 100px;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0.6)),
		url('https://static.vecteezy.com/ti/vetor-gratis/p3/21369766-abstrato-simples-forma-com-verde-branco-e-preto-cor-fundo-com-papercut-estilo-para-papel-de-parede-vetor.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;

	.slides {
		li {
			.img {
				overflow: hidden;
				border-radius: 10px;
				box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					object-fit: scale-down;
				}
			}

			&.toRightOld {
				animation: toRightOld 500ms ease-in-out;
			}

			&.toRightNew {
				animation: toRightNew 500ms ease-in-out forwards;
				left: 0;
			}

			&.toLeftOld {
				animation: toLeftOld 500ms ease-in-out;
			}

			&.toLeftNew {
				animation: toLeftNew 500ms ease-in-out forwards;
				left: 0;
			}

			&.active {
				left: 0;
			}
		}
	}

	> button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 5px;
		border-radius: 10px;

		&.prev {
			left: 30px;
		}

		&.next {
			right: 30px;
		}

		* {
			font-size: 3.5rem;
			color: var(--color-primary-soft);
		}
		:hover {
			* {
				color: var(--color-primary);
				font-size: 4rem;
			}
		}
	}

	.pagination {
		position: absolute;
		bottom: 30px;
		display: flex;
		left: 50%;
		transform: translateX(-50%);

		.dot {
			width: 50px;
			height: 5px;
			margin: 0 5px;
			background: var(--color-white);
			border-radius: 10px;
			cursor: pointer;
			transition: 300ms ease-in-out;

			&.active {
				background: var(--color-primary);
				top: 0;
				left: 0;
				cursor: default;
			}
		}
	}
`;
export default HomeBanner;
