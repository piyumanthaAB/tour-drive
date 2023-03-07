import styled from "styled-components";


export const Text = styled.p`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props=>props.lineheight || '2.5rem'};
`; 

export const IconContainer = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
`;
export const PlanSection = styled.div`
    width:100% ;
    ${'' /* background-color:red ; */}
    min-height:50rem ;
    display:flex ;
    padding:3rem 12rem ;
`;

export const Container = styled.div`
    display:flex ;
    flex-direction:column ;
    min-height:40rem ;
    width:60% ;
    ${'' /* background-color:blue; */}
`;

export const PlanWrapper = styled.div`
    flex:1 ;
    padding:2rem ;
    position: relative;
    ${'' /* background-color:green ; */}
    ${'' /* margin:2rem 0 ; */}
    padding:2rem 0 ;
`
export const PlanRow = styled.div`
    flex:0 1 100% ;
    background-color:#eee;
    min-height:5rem ;
    border-radius:1rem ;
    ${'' /* margin:0 0 1rem 0 ; */}
    display:flex ;
    padding:1rem ;
    align-items:center ;

    :hover{
        cursor: pointer;
    }
`;

export const DayLabel = styled.div`
    flex:0 1 12% ;
    background-color:var(--main-color) ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    border-radius:1rem ;
    padding:0rem 0.7rem ;

`;

export const PlanBody = styled.div`
    flex:0 1 100% ;
    ${'' /* background-color:red ; */}
    min-height:10rem ;
    border:1px solid #eee ;
    display:${props=>props.open?'block':'none' || 'none'} ;
    
`;

export const PlanBodyRow = styled.div`
    flex: 0 1 100%;
    display:flex ;
    align-items:center ;
    padding:1rem 2rem ;
    
`;










