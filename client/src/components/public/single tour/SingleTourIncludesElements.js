import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => props.fontsize || '1.5rem'};
  color: ${(props) => props.color || '1.5rem'};
  font-weight: ${(props) => props.fontweight || '1.5rem'};
  margin: ${(props) => props.margin || '0'};
  font-family: ${(props) => props.fontfamily || 'var(--primary-font)'};
  line-height: ${(props) => props.lineheight || '2.5rem'};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontsize || '1.5rem'};
  color: ${(props) => props.color || '1.5rem'};
  font-weight: ${(props) => props.fontweight || '1.5rem'};
  margin: ${(props) => props.margin || '0'};
`;

export const IncludesSection = styled.div`
  width: 100%;
  ${'' /* background-color:red ; */}
  min-height:30rem;
  display: flex;
  padding: 2rem 12rem;
`;

export const IncludesCOntainer = styled.div`
  flex: 0 1 60%;
  ${'' /* background-color:green ; */}
  min-height:100%;
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 2rem 0;
`;

export const Right = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 3rem;
`;

export const Left = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IncludeRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
`;
