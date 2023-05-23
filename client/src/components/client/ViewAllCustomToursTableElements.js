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

export const LabelIndicator = styled.div`
  background-color: ${(props) => props.backgroundColor || '#333'};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 0.5rem;
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TableDataCell = styled.td`
  padding: 1rem 1rem;
  font-weight: ${(props) => (props.th ? '500' : '400')};
  font-size: ${(props) => (props.th ? '1.3rem' : '1.4rem')};
  ${'' /* text-align:left ; */}
  color:${(props) => (props.th ? '#999' : '#555')};
  min-width: ${(props) => props.minwidth || 'auto'};
  &.flex {
    display: flex;
    align-items: center;
  }
`;

export const TableActionBtn = styled.div`
  /* width: 3rem; */
  /* height: 3rem; */
  width: 50%;
  padding: 0.5rem 0;
  border-radius: 1rem;
  /* background-color: var(--main-color); */
  background-color: ${(props) => props.backgroundColor || 'var(--main-color)'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  margin: 0 1rem 0 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 2rem; */
  font-size: 1.2rem;
  :hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`;
