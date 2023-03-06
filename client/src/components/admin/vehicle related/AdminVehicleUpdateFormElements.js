import styled from 'styled-components'


export const FormContainer = styled.div`
    flex:1 ;
    ${'' /* background-color:#eee ; */}
    padding:2rem 4rem ;
    display:flex ;
    justify-content:center ;
    ${'' /* align-items:center ; */}
`;

export const Form = styled.form`
    flex:1 ;
    min-height:30rem ;
    ${'' /* display:flex ; */}
    padding:2rem 4rem ;

`;

export const FormRow = styled.div`
    flex:1 ;
    display:flex ;
    justify-content:space-between ;
    margin:2rem 0 ;
    flex-wrap:wrap ;
`;

export const FormGroup = styled.div`
    width:40% ;
    min-height:5rem ;
    margin:2rem 2rem ;
    font-size:2rem ;
`;

export const FormSubmitBtnRow = styled.div`
    display:flex ;
    justify-content:flex-end ;
`;
export const FormSubmitBtnContainer = styled.div`
    display:flex ;
    flex:0 1 10% ;
`;