import styled from 'styled-components';
import React, { useState } from 'react';

const Container = styled.div`
  width: 100%;
  padding: 0rem 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  background-color: #ccc;
  padding: 1.5rem 2rem;
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
  font-size: 1.4rem;
  font-family: var(--primary-font);

  :hover {
    cursor: pointer;
  }
`;

const ListCheckBox = ({ checked, labelTxt, onChange, value }) => {
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

export default ListCheckBox;
