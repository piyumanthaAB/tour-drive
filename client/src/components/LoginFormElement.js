import styled from 'styled-components'

export const LoginContainer = styled.form`
    position: absolute;
    width: 517px;
    height: 702px;
    left: calc(50% - 517px/2 + 8.5px);
    top: calc(50% - 702px/2 - 6px);

    background:white ;
    box-shadow: 0px 4px 20px -10px rgba(0, 0, 0, 0.25);
    border-radius: 37px;
`;
export const MainContainer = styled.div`
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0px;
    top: 0px;

    background: linear-gradient(0deg, rgba(168, 57, 0, 0.05), rgba(168, 57, 0, 0.05)), #FFFBFF;
`;

export const LoginName = styled.h1`
    position: absolute;
    width: 79px;
    height: 40px;
    left: calc(50% - 79px/2 + 0.5px);
    top: calc(50% - 40px/2 - 309px);

    font-family:var(--primary-font);
    font-style:normal;
    font-weight:bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;

    color: #000000;

    border: 0px solid #000000;

`;

export const LoginDes =styled.h3`
    position: absolute;
    width: 316px;
    height: 32px;
    left: calc(30% - 79px/2 + 0px);
    top: calc(50% - 40px/2 - 250px);

    font-family:'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;

    text-align: center;

    color: #000000;
`;



export const LabelText =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 428px;
    height: 51px;
    left: 50px;
    top: 150px;

    background: #FFFFFF;
    border-radius: 500px;
    border: 0px solid #D24900;
    border-radius: 20px;
`;

 export const LabelTextTwo =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 428px;
    height: 51px;
    left: 50px;
    top: 220px;

    background: #FFFFFF;
    border-radius: 500px;
    border: 0px solid #D24900;
    border-radius: 20px;
`;

export const LabelTextEmail =styled.input`
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;

    width: 428px;
    height: 48px;


    border: 1px solid #D24900;

    border-radius:500px
`;


export const LabelTextPassword=styled.input`
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;

    width: 428px;
    height: 48px;


    border: 1px solid #D24900;

    border-radius:500px
`;

export const ForgetText=styled.p`
    position: absolute;
    width: 270px;
    height: 18px;
    left: 50px;
    top: 285px;

    font-family:'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;

    color: #943100;
`;

export const LoginButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;

    position: absolute;
    width: 428px;
    height: 52px;
    left: 50px;
    top: 315px;

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
`;

export const Desc2=styled.h3`
    position: absolute;
    width: 200px;
    height: 21px;
    left: 165px;
    top: 395px;

    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
`;

export const FacebookLoginButton = styled.button`
    position: absolute;
    width: 429px;
    height: 51px;
    left: 50px;
    top: 445px;

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;

    color: #802A00;

    font-family:'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;


    border: 0px solid #D24900;

    background: linear-gradient(0deg, rgba(168, 57, 0, 0.05), rgba(168, 57, 0, 0.05)), #FFFBFF;
`;

export const GoogleLoginButton=styled.button`
    position: absolute;
    width: 429px;
    height: 51px;
    left: 50px;
    top: 520px;


    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;

    color: #802A00;

    font-family:'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;


    border: 0px solid #D24900;

    background: linear-gradient(0deg, rgba(168, 57, 0, 0.05), rgba(168, 57, 0, 0.05)), #FFFBFF;
`;

export const Desc3=styled.h3`
    position: absolute;
    width: 300px;
    height: 21px;
    left: 130px;
    top: 625px;

    font-family:'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;

    h3{
    position: absolute;
    width: 95px;
    height: 14px;
    left:150px;
    top: 0px;
    color:red;}
`;