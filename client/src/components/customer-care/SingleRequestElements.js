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

export const MapContainer = styled.div`
  width: 80%;
  height: 40rem;
  /* background-color: red; */
  margin: 2rem auto;
  -webkit-box-shadow: 5px 5px 15px 5px #cfcfcf;
  box-shadow: 5px 5px 15px 5px #cfcfcf;
`;

export const FormGroup = styled.div`
  flex: 0 1 40%;
  margin: 1rem 0;
  ${'' /* background-color:green ; */}
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

export const SubmitBtn = styled.button`
  outline: none;
  background-color: ${(props) => props.color || 'var(--main-color)'};
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  color: #fff;
  ${'' /* margin:2rem auto 0 0   ; */}
  margin:2rem 1rem;
  min-width: 40%;
  :hover {
    cursor: pointer;
  }
`;
