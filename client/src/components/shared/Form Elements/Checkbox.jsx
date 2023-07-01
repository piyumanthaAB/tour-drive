import styled from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
  width: 100%;
  padding: 0rem 1rem;
  position: relative;
  ${'' /* background-color:#eee ; */}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
`;

const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 10px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    background-color: white;
    box-sizing: border-box;
    font-size: 20px; /* increase the font-size to increase checkbox size */
  }

  &:checked::before {
    content: '✔';
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.4rem;
    color: white;
    background-color: var(--main-color);
  }
`;

const Label = styled.label`
  font-size: 1.9rem;
  font-family: var(--primary-font);

  :hover {
    cursor: pointer;
  }
`;

export const CheckBox = ({ checked, labelTxt, onChange, value }) => {
  // const [val, setVal] = useState('');
  return (
    <Container>
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={labelTxt}
        value={value}
      />
      <Label htmlFor={labelTxt}>{labelTxt}</Label>
    </Container>
  );
};
