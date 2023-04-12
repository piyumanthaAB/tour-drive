import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 0rem 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
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
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
  }

  &:checked::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--main-color);
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-family: var(--primary-font);

  :hover {
    cursor: pointer;
  }
`;

const RadioButton = ({ checked, labelTxt, onChange, value }) => {
  return (
    <Container>
      <Input
        type="radio"
        checked={checked}
        onChange={onChange}
        id={labelTxt}
        value={value}
        name="radio"
      />
      <Label htmlFor={labelTxt}>{labelTxt}</Label>
    </Container>
  );
};

export default RadioButton;
