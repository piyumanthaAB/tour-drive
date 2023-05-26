import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* min-height: 500rem; */
  /* background-color: red; */
  padding: 3rem 12rem 0;
`;

export const PostTitle = styled.p`
  font-family: var(--primary-font);
  font-size: 3rem;
  margin: 3rem 0rem;
  font-weight: bold;
`;

export const HeroImageContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 50rem;
  width: 80%;
  border-radius: 1rem;
  /* margin: 1rem auto; */
`;

export const ParagraphContainer = styled.div`
  width: 80%;
  padding: 3rem 0;
`;

export const Paragraph = styled.p`
  font-family: var(--primary-font);
  font-size: 1.8rem;
  line-height: 2.5rem;
  /* text-align: center; */
`;

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const GalleryImgContainer = styled.div`
  background-image: url(${(props) => props.image});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* width: 0%; */
  flex: 0 1 30%;
  height: 27rem;
`;
