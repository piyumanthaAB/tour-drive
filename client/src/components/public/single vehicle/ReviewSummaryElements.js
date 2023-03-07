import styled from "styled-components";


export const Text = styled.p`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props => props.lineheight || '2.5rem'};
    
`;

export const IconContainer = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    background-color:${props => props.bacgroundcolor || 'none'} ;
    border-radius:${props => props.borderradius || '0'} ;
    padding:${props => props.padding || '0'} ;
`;

export const Section = styled.div`
    width:100% ;
    ${'' /* background-color:red ; */}
    min-height:30rem ;
    padding:3rem 12rem ;
    display:flex ;
    margin:0 0 2rem 0  ;
`;

export const Container = styled.div`
    width:60% ;
    min-height:100% ;
    ${'' /* background-color:green ; */}

`;

export const ReviewsContainer = styled.div`
    width:100% ;
    display:flex ;
    padding:3rem 1rem;
    ${'' /* background-color:red ; */}
    justify-content:space-between ;
    min-height:100% ;
    
`;

export const Left = styled.div`
    flex:0 1 48% ;
    ${'' /* background-color:green ; */}
    box-shadow: 0px 0px 32px 0px rgba(143,143,143,0.2);
    display:flex ;
    flex-direction:column ;
`;
export const Right = styled.div`
    flex:0 1 48% ;
    ${'' /* background-color:blue ; */}
    box-shadow: 0px 0px 32px 0px rgba(143,143,143,0.2);
    padding:2rem ;
`;
export const LeftTop = styled.div`
    display:flex ;
    flex:1 ;
    min-height:50% ;
    ${'' /* background-color:red ; */}

    position: relative;

::after{
    position:absolute ;
    bottom:0 ;
    right:10% ;
    width:80% ;
    height:1px ;
    background-color:#ccc ;
    content:'' ;
}
`;

export const LeftBottom = styled.div`
    display:flex ;
    flex:1 ;
    min-height:50% ;
    ${'' /* background-color:green ; */}
    align-items:center ;
    padding:2rem ;
`;

export const LeftTopLeft = styled.div`
    flex:1;
    ${'' /* background-color:red ; */}
    display:flex ;
    justify-content:space-around ;
    align-items:center ;
    flex-direction:column ;
    padding:2rem 0 ;
   

`;
export const LeftTopRight = styled.div`
    flex:0 1 55% ;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    padding:0 2rem ;
    ${'' /* background-color:green ; */}
`;

export const ReviewStarsContainer = styled.div`
    flex:0 1 20%;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
`;

export const ReviewRowGroup = styled.div`
    flex:1 ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    margin:1rem 0 ;
    position: relative;
`;

export const ReviewRow = styled.div`
    flex:1 ;
    min-height:1.5rem ;
    background-color:#ddd ;
    border-radius:0.5rem ;

    ::after{
        position:absolute ;
        bottom:0 ;
        left:0 ;
        width:${props=>props.percentage || '80%'} ;
        height:1.5rem;
        content:'' ;
        background-color:#00BB98 ;
        border-radius:0.5rem ;
        z-index:0 ;
    }
`;

export const Percentage = styled.div`
    width:5rem ;
    height:1.5rem ;
    ${'' /* background-color:red ; */}
    position:absolute ;
    bottom:10% ;
    left:45% ;
    content:'' ;
    z-index:1 ;
`;








