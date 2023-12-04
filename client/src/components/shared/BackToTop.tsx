import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from "react-icons/io";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <StyledBackToTop onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none'}}>
      <IoIosArrowUp />
    </StyledBackToTop>
  );
};

const StyledBackToTop = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  right: 60px;
  padding: 1rem;
  font-size: 25px;
  background-color: #fff;
  color: #008025;
  box-shadow: 0 0 6px 0 #00000088;
  border-radius: 50%;
  cursor: pointer;

  * {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--color-primary);
	}

  &:hover {
		* {
			animation: BackToTopAnimationIcon 500ms ease-out infinite alternate;
		}
	}

	@keyframes BackToTopAnimationIcon {
		to {
			transform: translateY(-3px);
		}
	}
`;

export default BackToTop;
