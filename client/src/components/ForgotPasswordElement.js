import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const LoginContainer = styled.form`
    position: relative;
    width: 500px;
    height: 600px;
    left: calc(50% - 500px/2 + 8.5px);
    top: calc(50% - 600px/2 - 6px);
    background:white ;
    box-shadow:0px 4px 20px -10px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;
export const MainContainer = styled.div`
    position: relative;
    width:100vw;
    height:100vh;
    left: 0px;
    top: 0px;

    background: linear-gradient(0deg, rgba(168, 57, 0, 0.05), rgba(168, 57, 0, 0.05)), #FFFBFF;
`;

export const DesContainer = styled.div`
position: relative;
width: 400px;
height: 100px;
left: calc(50% - 500px/2 + 48.5px);
top: calc(50% - 600px/2 - 6px);
background:white ;
//box-shadow:0px 4px 20px -10px rgba(0, 0, 0, 0.25);
border-radius: 30px;
align: center;
`;

export const LoginName = styled.h1`
    font-family:var(--primary-font);
    font-style:normal;
    font-weight:bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    padding:15px;
    color: #000000;
    border: 0px solid #000000;
`;

export const LoginDes =styled.h3`
    font-family:var(--primary-font);
    //font-family:'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 32px;
    text-align: center;
    color: #000000;
`;



export const LabelText =styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding:30px 5px 5px 5px;
`;

export const EmailInputContainer=styled.div`
padding:0 4rem;
`

export const LabelTextEmail =styled.input`
     position:relative;
     width: 428px;
     height: 52px;
     border: 1px solid #D24900;
     border-radius:20px;
     text-align:left;
     padding:15px;

     &:hover {
        
        cursor:pointer;
    }
`;


 export const LabelTextTwo =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px 5px 5px 5px;
`;



export const LabelTextPassword=styled.input`
    position:relative;
    width: 428px;
    height: 52px;
    border: 1px solid #D24900;
    border-radius:20px;
    text-align:left;
    padding:15px;

    &:hover {
        
        cursor:pointer;
    }
`;

export const ForgetText=styled.p`
    position: reletive;
    letter-spacing: 0.02em;
    
    font-family:'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    text-align:left;
    line-height: 5px;
    padding:20px;
    padding-left:40px;
    color: #943100;
    
    &:hover {
        
        cursor:pointer;
    }
`;

export const LoginButton = styled.button`
    
position: relative;
width: 428px;
height: 52px;
left:35px;
top: 35px;
padding:15px;

background-color:${props => props.selected ? 'var(--main-color)' : "#fff"};
color:${props => props.selected ? '#fff' : '#333'} ;

box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
//background: var(--main-color);
border-radius: 20px;
border: 0px solid #D24900;
//color: #802A00;

font-family:var(--primary-font);
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;

:hover{
    background-color:${props => props.selected ? '#fff' : 'var(--main-color)'};
    color:${props => props.selected ? '#333' : '#fff'};
    border:${props => props.selected ? '1px solid var(--main-color)' : '1px solid #fff'} ;
}
`;

/* export const LoginButton2 = styled.button`
    position: relative;
    width: 428px;
    height: 48px;
    left:35px;
    top: 35px;
    
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    background: var(--main-color);
    border-radius: 20px;
    border: 0px solid #D24900;
    color: #802A00;

    font-family:'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;

    &:hover {
        
        cursor:pointer;
    }
`;
 */
export const Desc2=styled.h3`
    position: relative;
    width: 200px;
    height: 21px;
    left: 165px;
    text-align:center;
    padding:20px;

    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
`;



export const Desc3=styled.h3`
    position: relative;
    width: 428px;
    height: 48px;
    left:50px;
    top:60px;
    font-family:var(--primary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;

    h3{
    position: relative;
    width: 95px;
    height: 14px;
    left:150px;
    top: -20px;
    color:#943100;

    &:hover {
        
        cursor:pointer;
    }
}
`;

