import styled from 'styled-components';

export const Container = styled.div`
  width: 100;
  min-height: 10rem;
  padding: 3rem 6rem;
`;

export const FormTitle = styled.p`
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-height: 40rem;
  overflow-x: scroll;
  padding: 4rem 2rem;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  font-family: var(--dashboard-font);
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  :hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const TableData = styled.td`
  padding: 1rem 1rem;
  font-weight: ${(props) => (props.th ? '500' : '400')};
  font-size: ${(props) => (props.th ? '1.6rem' : '1.8rem')};
  color: ${(props) => (props.th ? '#777' : '#333')};
  min-width: ${(props) => props.minwidth || 'auto'};
  &.flex {
    display: flex;
    align-items: center;
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

export const TableActionBtn = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-fcolor: #fff;
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
