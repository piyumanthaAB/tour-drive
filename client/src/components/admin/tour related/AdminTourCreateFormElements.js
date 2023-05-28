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
  display: flex;
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

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 0;
`;

export const StatusLabel = styled.div`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.backgroundColor};
  font-family: var(--primary-font);
  border-radius: 2rem;
  width: max-content;
  color: #333;
  font-size: 1.3rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  outline: none;
  border: 1px solid #333;
  font-family: var(--primary-font);
  font-weight: 600;
`;

// export const SubmitBtn = styled.button`
//   outline: none;
//   background-color: ${(props) => props.color || 'var(--main-color)'};
//   font-size: 1.5rem;
//   font-weight: 600;
//   border: none;
//   padding: 1rem;
//   border-radius: 2rem;
//   color: #fff;
//   ${'' /* margin:2rem auto 0 0   ; */}
//   margin:2rem 1rem;
//   min-width: 40%;
//   :hover {
//     cursor: pointer;
//   }
// `;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 40rem;
  ${'' /* background-color:red ; */}
  overflow-x:scroll;
  padding: 4rem 2rem;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  font-family: var(--dashboard-font);
  ${'' /* border-top:1px solid #ccc ; */}
  ${'' /* border-bottom:1px solid #ccc ; */}
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  :hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const TableDataCell = styled.td`
  padding: 1rem 1rem;
  font-weight: ${(props) => (props.th ? '500' : '400')};
  font-size: ${(props) => (props.th ? '1.5rem' : '1.6rem')};
  ${'' /* text-align:left ; */}
  color:${(props) => (props.th ? '#777' : '#333')};
  min-width: ${(props) => props.minwidth || 'auto'};
  &.flex {
    display: flex;
    align-items: center;
  }
`;

export const TableActionBtn = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #fff;
  border: 1px solid #333;
  margin: 0 1rem 0 0;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  font-size: 1.6rem;
  :hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

export const SubmitBtn = styled.div`
  /* width: 50%; */
  width: max-content;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor || '#333'};
  /* background-color: var(--main-color); */
  padding: 1rem 2rem;
  font-family: var(--primary-font);
  font-size: 1.5rem;
  color: #fff;
  border-radius: 2rem;
  :hover {
    cursor: pointer;
  }
  margin: 0 1rem;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  margin: 2rem 0;
  flex: 0 1 80%;
  /* min-height: 20rem; */
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;

export const DescGroup = styled.div`
  flex: 0 1 35%;
  display: flex;
  /* justify-content: flex-start; */
  justify-content: space-between;
  align-items: center;
`;
