import styled from "styled-components";
export const Text = styled.p`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props=>props.lineheight || '2.5rem'};
`;

export const MapSection = styled.div`
    width:100% ;
    ${'' /* background-color:red ; */}
    min-height:50rem ;
    display:flex ;
    flex-direction:column ;
    padding:3rem 12rem ;
`;

export const MapContainer = styled.div`
    width:60% ;
    height:400px ;
    ${'' /* background-color:green ; */}
`;
