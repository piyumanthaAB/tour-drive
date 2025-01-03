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

export const TableDataCell = styled.td`
  padding: 1rem 1rem;
  font-weight: ${(props) => (props.th ? '500' : '400')};
  font-size: ${(props) => (props.th ? '1.6rem' : '1.6rem')};
  ${'' /* text-align:left ; */}
  color:${(props) => (props.th ? '#777' : '#333')};
  min-width: ${(props) => props.minwidth || 'auto'};
  &.flex {
    display: flex;
    align-items: center;
  }
`;
