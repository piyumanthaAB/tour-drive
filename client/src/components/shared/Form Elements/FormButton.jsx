import React from 'react'
import styled from 'styled-components'



const Button = styled.button`
    width:100% ;
    padding:${props=>props.padding || '1rem 2rem'} ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:${props => props.backgroundcolor || 'var(--main-color)'} ;
    color:${props => props.textcolor || '#333'} ;
    font-weight:${props=>props.fontweight || '300'} ;
    border-radius:4rem ;
    border:none ;
    outline:none ;

    :hover{
        cursor: pointer;
    }
`;

const FormButton = ({btntext,onClick,padding,backgroundcolor,textcolor,fontweight}) => {
  return (
    <Button
            fontweight={fontweight}
            padding={padding}
            backgroundcolor={backgroundcolor}
            textcolor={textcolor}
            onClick={() => { onClick() }}
        >
            {btntext}
        </Button>
  )
}

export default FormButton