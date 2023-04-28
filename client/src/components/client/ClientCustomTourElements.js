import styled from 'styled-components';

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

export const Form = styled.form`
  width: 100%;
  min-height: 15rem;
  /* display: flex; */
  padding: 2rem;
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  margin-bottom: 3rem;
`;

export const FormGroup = styled.div`
  flex: 0 1 40%;
  margin: 1rem 0;
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
  margin: 2rem 1rem;
  min-width: 40%;
  :hover {
    cursor: pointer;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CheckBoxListContainer = styled.div`
  width: 100%;
  max-height: 30rem;
  /* background-color: red; */
  overflow-y: scroll;
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 2rem;
  border-right: 0px;
`;

export const ListItemsContainer = styled.div`
  width: 100%;
  max-height: 20rem;
  /* background-color: green; */
  overflow-y: scroll;
`;

export const ListItem = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 1.5rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.2s;
  /* border-bottom: 1px solid #333; */
  margin: 0.5rem 0;

  background-color: ${(props) => props.selected && 'var(--main-color)'};
  color: ${(props) => props.selected && '#fff'};

  :hover {
    cursor: pointer;
    background-color: var(--main-color);
    color: #fff;
  }
`;
export const ViewOnlyItem = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 1.5rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.2s;
  /* border-bottom: 1px solid #333; */
  margin: 0.5rem 0;

  :hover {
    /* cursor: none; */
    /* background-color: var(--main-color);
    color: #fff; */
  }
`;

export const HR = styled.hr`
  width: 100%;
  margin: 5rem 0;
`;

// export const AddCityBtn=styled.div`
//   width: 20%;
//   padd
// `;
