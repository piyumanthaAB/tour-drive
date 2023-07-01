import React from 'react';
import styled from 'styled-components';

const TextLabel = styled.p`
  font-size: ${(props) => props.fontsize || '1.7rem'};
  margin: ${(props) => props.margin || '1rem 0'};
  font-weight: ${(props) => props.fontweight || '400'};
  color: ${(props) => props.fontcolor || '#333'};
  font-family: ${(props) => props.fontsize || 'var(--secondary-font)'};
`;

const Label = ({ labelText }) => {
  return <TextLabel>{labelText}</TextLabel>;
};

export default Label;
