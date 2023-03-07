import React,{useState} from 'react'
import styled from 'styled-components'
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";

const Container = styled.div`
    position:relative ;
`;

const InputField = styled.input`

    width:100% ;
    border-radius:1rem ;
    outline:none;
    border:none ;
    padding:1.5rem 3rem ;
    font-size:1.3rem ;
    font-weight:bold ;
    position:relative ;
    color:var(--form-input-text-color);
    border:1px solid #333 ;
    font-family:var(--primary-font)  ;
`;

const ToggleBtn = styled.div`
    width:4rem ;
    height:4rem ;
    background-color:rgba(0,0,0,0) ;
    position:absolute ;
    top:15% ;
    right:3% ;
    outline:none ;
    font-size:2.2rem ;
    border:none ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-weight:bold ;
    color:var(--form-password-icon-color) ;

    :hover{
        cursor: pointer;
    }
`;

const PasswordField = ({ placeholder, value, setValue }) => {
    const[type,setType]=useState('password')
  return (
    <Container>
            
            <InputField
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                placeholder={placeholder || 'placeholder'}
                
            />
            <ToggleBtn onClick={(e) => type === 'password' ? setType('text') : setType('password')}>
                {type==='password'?<AiOutlineEyeInvisible/>:<AiOutlineEye />}
                {/* <AiOutlineEye /> */}
            </ToggleBtn>
        </Container>
  )
}

export default PasswordField