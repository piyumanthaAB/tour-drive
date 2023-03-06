import styled from "styled-components";

export const Text = styled.p`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props => props.lineheight || '2.5rem'};
    
`;

export const Section = styled.div`
    width:100% ;
    min-height:30rem ;
    display:flex ;
    ${'' /* background-color:red ; */}
    padding:3rem 12rem ;

`;



export const Container = styled.div`
    width:60% ;
    min-height:100% ;
    display:flex ;
    flex-direction:column ;
    ${'' /* background-color:green ; */}
    border:1px solid #eee ;
    padding:3rem 2rem ;
`;


export const ReviewStarSectionContainer = styled.div`
    width:60% ;
    flex:0 1 70% ;
    ${'' /* background-color:red ; */}
`;
export const StarRow = styled.div`
    display:flex ;
    justify-content:space-between ;
`;

export const StarComponentCOntainer = styled.div`
    flex:0  1 50% ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
`;

export const ReviewForm = styled.form`
    flex:0 1 50% ;
    width:100% ;
    padding:2rem 0 3rem ;
    ${'' /* background-color:green ; */}

`;

export const FormGroup = styled.div`
    width:100% ;
    margin:1rem 0 ;
    ${'' /* padding:1rem 2rem ; */}
`;

export const Input = styled.input`
    width:100% ;
    border-radius:0.5rem ;
    font-size:1.5rem ;
    outline:none ;
    border:none ;
    background-color:#F5F6F9;
    padding:1rem 1rem ;
`;
export const InputArea = styled.textarea`
    width:100% ;
    border-radius:0.5rem ;
    font-size:1.5rem ;
    outline:none ;
    border:none ;
    background-color:#F5F6F9;
    padding:1rem 1rem ;
    font-family:var(--primary-font) ;
`;

export const FormBtnCOntainer = styled.div`
    width:20% ;
`;

