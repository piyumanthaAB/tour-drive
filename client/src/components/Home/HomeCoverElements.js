import styled from "styled-components";
import tour from "../../images/tour_back.jpg";
import renting from "../../images/renting.jpg";


export const section = styled.div`
    min-width: 100vw;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;

    
.overlay{
    background-color: black;
    position: absolute;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    transition: all 1s ease;
}
`;



const hover = (`
   
    .test {
            display: none;
        }
        &:hover {
            flex-grow: 3;
            .test {
                display: block;
            }
        }
`)

export const panel = styled.div`
    padding: 0px;
    flex-grow: 1;
    transition: all 1s ease;
    &:hover .overlay{
        opacity: 1;
    }
    &:nth-child(even) {
        background-image: url(${renting});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        ${hover}
    }
    &:nth-child(odd) {
        
        background-image: url(${tour});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        ${hover}
    }
`;
export const btnDrive = styled.a`
    display: flex;
    flex-direction: row;
    padding: 70px;
    z-index: 9999;
    .btn {
        padding: 1.5rem;
        width: 16rem;
        text-decoration: none;
        border: 3px solid #fff;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.1)
    }
`;
export const btnTour = styled.a`
    display: flex;
    flex-direction: row-reverse;
    padding: 70px;
    z-index: 9998;
    .btn {
        padding: 1.5rem;
        width: 16rem;
        text-decoration: none;
        border: 3px solid #fff;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.1)
    }
`;
 export const tourH1 = styled.div`
    padding-right: 40px;
    z-index: 9997;
    filter: blur(0px);
    display: flex;
    flex-direction: row-reverse;
    font-size: 80px;
    font-family: var(--secondary-font);
    font-weight: bold;
    color: var(--secondary-color)
    }
 `;
 export const driveH1 = styled.div`
    padding-left: 40px;
    z-index: 9996;
    display: flex;
    flex-direction: row;
    font-size: 80px;
    font-family: var(--secondary-font);
    font-weight: bold;
    color: var(--main-color);
 `;

