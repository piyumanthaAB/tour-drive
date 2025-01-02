import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 10rem;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const BlogCard = styled.div`
  flex: 0 1 47%;
  max-height: min-content;
  /* background-color: yellow; */
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const BlogCardImgContainer = styled.div`
  min-height: 35rem;
  background-image: url(${(props) => props.image});
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BlogCardTitle = styled.p`
  font-family: var(--primary-font);
  font-weight: bold;
  font-size: 2.5rem;
  margin: 2rem 0;
`;

export const BlogDesc = styled.p`
  font-family: var(--primary-font);
  font-weight: 500;
  font-size: 1.8rem;
  color: #555;
`;

export const LinkBtn = styled(Link)`
  font-family: var(--primary-font);
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  background-color: var(--main-color);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: max-content;
  margin: 2rem 0;
`;
