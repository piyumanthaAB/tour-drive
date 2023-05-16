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

// export const HR = styled.hr`
//   width: 100%;
//   margin: 5rem auto;
//   border: 1px solid #ccc;
//   background-color: #ccc;
// `;

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
export const CardRow = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  /* background-color: red; */
  margin: 1rem 0;
`;

export const CustomCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CheckBoxListContainer = styled.div`
  width: 100%;
  max-height: 30rem;
  /* background-color: red; */
  overflow-y: scroll;
  border: 1px solid #333;
  border-right: 0px;
  border-radius: 1rem;
  padding: 2rem;
`;

export const ListItemsContainer = styled.div`
  width: 100%;
  max-height: 30rem;
  /* background-color: green; */
  overflow-y: scroll;
  border: 1px solid #333;
  border-right: 0px;
  padding: 2rem;
  border-radius: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    /* cursor: none; */
    /* background-color: var(--main-color);
    color: #fff; */
  }
`;

export const StartLocationLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background-color: var(--main-color);
  color: #fff;
`;

export const HR = styled.hr`
  width: 100%;
  margin: 5rem 0;
`;

export const AddCityBtn = styled.button`
  width: 50%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 600;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: var(--main-color); */
  background-color: #333;

  :hover {
    cursor: pointer;
  }
`;

export const RemoveIcon = styled.div`
  width: 2rem;
  height: 2rem;
  /* background-color: ; */
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    background-color: var(--main-color);
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
`;

export const CardHeader = styled.div`
  width: 100%;
  background-color: var(--main-color);
  min-height: 5rem;
  /* border-radius: 1rem; */
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
`;

export const CardDayContainer = styled.div`
  flex: 0 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
`;
export const CardCityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.8rem;
  color: #fff;
  padding: 0 2rem;
  font-weight: 700;
`;

export const CardBodyContainer = styled.div``;

export const AccomodationCardContainer = styled.div`
  width: 80%;
  background-color: #ccc;
  min-height: 20rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
`;
