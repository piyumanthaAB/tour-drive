import styled from "styled-components";
import tour from "../../images/tour_back.jpg";
import renting from "../../images/renting.jpg";


export const header = styled.div`
    font-size: 130px;
    font-family: var(--secondary-font);
    font-weight: bold;

`;

export const content = styled.div`
    display: flex;
    flex-direction: column;
    flex-spacing: 2px;
    position: absolute;
    ${ props => props.left && `left: 2px;` }
    ${ props => props.right && `right: 2px;` }
`;

export const actions = styled.div`
    display: flex;
`;

export const actionBtn = styled.div`
    padding: 5px;
    background-color: red;
`;

export const actionSearch = styled.div`
    background-color: blue;
`;

export const panel = styled.div`
    flex-grow: 1;
    transition: all 1.7s ease;
    position: relative;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${actionSearch} {
        display: none;
    }

    &:hover {
        flex-grow: 3;
    }

    &:hover ${actionSearch} {
        display: flex;
    }
`;

export const section = styled.div`
    min-width: 100vw;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    
    & ${panel}:nth-child(odd) ${header} {
        color: var(--secondary-color);      
    }
    & ${panel}:nth-child(even) ${header} {
        color: var(--main-color);      
    }
`;