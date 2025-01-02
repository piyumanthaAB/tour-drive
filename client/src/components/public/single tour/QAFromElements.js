import styled from 'styled-components';

export const Section = styled.div`
  /* width: 100%; */
  width: 60%;

  ${'' /* min-height:30rem ; */}
  display:flex;
  ${'' /* background-color:red ; */}
  padding:3rem 12rem;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 30rem;
  overflow-y: scroll;
  /* background-color: red; */
`;

export const Title = styled.p`
  font-family: var(--ptimary-font);
  font-size: 2.2rem;
  font-weight: 700;
  color: #555;
  width: 60%;
`;

export const QAtitleBar = styled.div`
  flex: 0 1 15%;
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  margin: 0 0 1rem;
`;

export const Row = styled.div`
  width: 100%;
  min-height: 10rem;
  /* background-color: red; */
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const QuestionAnswer = styled.p`
  font-family: var(--ptimary-font);
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
`;

export const SubmitBtn = styled.button`
  font-size: 1.5rem;
  background-color: var(--main-color);
  color: #fff;
  border-radius: 2rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  margin: 1rem 0;
  width: max-content;
  font-family: var(--primary-font);
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
