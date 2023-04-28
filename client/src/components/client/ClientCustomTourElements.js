import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  padding: 3rem 6rem;
`;

export const FormTitle = styled.p`
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
`;

export const HR = styled.hr`
  width: 100%;
  margin: 5rem auto;
  border: 1px solid #ccc;
  background-color: #ccc;
`;

export const TourCard = styled.div`
  width: 100px;
  display: flex;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 3rem 0;
  display: flex;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
`;

export const Form = styled.form`
  width: 100%;
  min-height: 15rem;
  display: flex;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

export const FormGroup = styled.div`
  flex: 0 1 40%;
  margin: 1rem 0;
`;

export const SubmitBtn = styled.button`
  outline: none;
  background-color: ${(props) => props.color || "var(--main-color)"};
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  padding: 1rem;
  border-radius: 2rem;
  color: #ff;
  margin: 2rem 1rem;
  min-width: 40%;
  :hover {
    cursor: pointer;
  }
`;
