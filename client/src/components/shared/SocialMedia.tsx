import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaXTwitter as FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

type SocialMediaProps = {
	customStyled?: boolean;
};
const SocialMedia = ({ customStyled }: SocialMediaProps): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent $footer={customStyled}>
		<li>
			<a target='_blank' href='https://www.instagram.com/academicosdesantacruzrj/'>
				<FaInstagram />
			</a>
		</li>
		<li>
			<a target='_blank' href='https://www.facebook.com/acadsantacruz?mibextid=LQQJ4d'>
				<FaFacebook />
			</a>
		</li>
		<li>
			<a target='_blank' href='https://www.youtube.com/@academicosdesantacruz'>
				<FaYoutube />
			</a>
		</li>
		<li>
			<a target='_blank' href='https://x.com/acadsantacruz?s=11'>
				<FaXTwitter />
			</a>
		</li>
	</StyledComponent>
);

const StyledComponent = styled.ul<{ $footer?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;

		* {
			font-size: 2rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		${props =>
			!props.$footer
				? `&:nth-child(1) {
						* {
							color: #e4405f;
						}
					}
					&:nth-child(2) {
						* {
							color: #3b5998;
						}
					}
					&:nth-child(3) {
						* {
							color: #cd201f;
						}
					}
					&:nth-child(4) {
						* {
							color: #000000;
						}
					}`
				: ''}

		&:hover {
		background: #ffffff;

			* {
				color: ${props => (props.$footer ? 'rgb(28, 59, 53)' : 'var(--color-primary-soft)')};
			}
		}
	}
`;

export default SocialMedia;
