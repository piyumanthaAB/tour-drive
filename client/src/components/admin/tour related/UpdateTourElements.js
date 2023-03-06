import styled from "styled-components";



export const Container = styled.div`
    width:100% ;
    min-height:10rem ;
    ${'' /* background-color:red ; */}
    padding:3rem 6rem ;
`;

export const FormTitle = styled.p`
    font-size:2.5rem ;
    color:#333 ;
    font-weight:700 ;
`;

export const Form = styled.form`
    width:100% ;
    min-height:15rem ;
    ${'' /* background-color:red; */}
    display:flex ;
    padding:2rem ;
    flex-wrap:wrap ;
    justify-content:space-around ;
    margin-bottom:3rem ;
`;

export const FormGroup = styled.div`
    flex:0 1 40% ;
    margin:1rem 0 ;
    ${'' /* background-color:green ; */}
`;

export const DateInput = styled.input`
    width:100% ;
    font-size:1.6rem ;
    border-radius:1rem ;
    padding:1.5rem 2rem ;
    outline:none ;
    border:1px solid #333 ;
    font-family:var(--primary-font) ;
    font-weight:600 ;
`;

export const SubmitBtn = styled.button`
    outline:none ;
    flex:0 1 20% ;
    background-color:var(--main-color) ;
    font-size:1.5rem ;
    font-weight:600 ;
    border:none ;
    padding:1rem ;
    border-radius:2rem ;
    color:#fff ;
    margin:2rem auto 0 0   ;
`;