import styled from "styled-components";


export const Container = styled.div`
    max-width: 150rem;
    padding: 4rem 1rem;
    margin: 0 auto;
    max-height: 150rem;
`;

export const heading = styled.h1`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props=>props.lineheight || '2.5rem'};
    text-align: center;
`;
export const basicCard = styled.div`
    width: 100px;
    display: flex;
    background-color:white;
    border-radius:1rem ;
    padding:1rem ;
    margin:3rem 0 ;
    display:flex ;
    box-shadow: 0px 0px 32px 0px rgba(143,143,143,0.2);

`;
export const SliderControler= styled.div`
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 58% !important;
    transform: translateX(-58%) !important;
    background: var(--white);
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    left: 42%;
    transform: translateX(-42%);
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    font-size: 2rem;
    color: #222224;
    content: '';
`;
export const SliderArrow= styled.div`
    background: var(--white);
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    left: 42%;
    transform: translateX(-42%);
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    font-size: 2rem;
    color: #222224;
    content: '';
`;
export const Pagination= styled.div`
    position: relative;
    width: 15rem !important;
    bottom: 1rem;
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    background: var(--primary);
`;