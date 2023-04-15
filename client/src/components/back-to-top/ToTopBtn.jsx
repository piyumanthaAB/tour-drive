import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Button = styled.button`
  width: 5.5rem;
  height: 5.5rem;
  ${'' /* background-color:var(--fourth-blue) ; */}
  background: linear-gradient(to right, var(--main-color) 0%,var(--main-color) 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  position: fixed;
  bottom: 2%;
  left: 95%;
  color: #fff;
  outline: none;
  border: none;
  transition: all 0.3s;
  z-index: 99999;

  :hover {
    font-size: 2.5rem;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    left: 94%;
  }
  @media (max-width: 800px) {
    left: 93%;
  }
  @media (max-width: 700px) {
    left: 92%;
    width: 4.5rem;
    height: 4.5rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const ToTopBtn = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    const scrollToTopBehavior = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const unlisten = () => {
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    scrollToTopBehavior();

    return unlisten;
  }, [location]);

  return (
    <>
      {scrollToTop && (
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <MdKeyboardArrowUp />
        </Button>
      )}
    </>
  );
};

export default ToTopBtn;
