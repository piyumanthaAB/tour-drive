import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`

    width:100% ;
    border-radius:1rem ;
    outline:none;
    border:none ;
    padding:1.5rem 2rem ;
    font-size:1.4rem ;
    font-weight:bold ;
    color:var(--form-input-text-color);
    border:1px solid #333 ;
    font-family:var(--primary-font)  ;

    ::placeholder{
      color:#999 ;
    }
`;

const TextField = ({ placeholder, value, setValue, type }) => {

  const validateEmail = (value) => {
    
  }
  
  

  return (
    <InputField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type || 'text'}
      placeholder={placeholder || 'placeholder'}
      onBlur={type==='email'?(e)=>validateEmail(e.target.value):()=>{}}
    />
  );
}

export default TextField