import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  ${'' /* background-color:red ; */}
  padding:3rem 6rem;
`;

export const FormTitle = styled.p`
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
`;

export const Form = styled.form`
  width: 100%;
  min-height: 15rem;
  ${'' /* background-color:red; */}
  display:flex;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

export const FormGroup = styled.div`
  flex: 0 1 40%;
  margin: 1rem 0;
  ${'' /* background-color:green ; */}
`;
export const ButtonGroup = styled.div`
  flex: 0 1 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  ${'' /* background-color:green ; */}
`;

export const SubmitBtn = styled.button`
  /* width: 50%; */
  width: max-content;
  font-weight: bold;
  background-color: var(--main-color);
  /* background-color: var(--main-color); */
  padding: 1rem 2rem;
  font-family: var(--primary-font);
  font-size: 1.5rem;
  color: #fff;
  border-radius: 2rem;
  :hover {
    cursor: pointer;
  }
  border: none;
  outline: none;
  margin: 0 auto;
`;
