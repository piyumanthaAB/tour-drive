import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.form`
  position: relative;
  width: 500px;
  height: 600px;
  left: calc(50% - 500px / 2 + 8.5px);
  top: calc(50% - 600px / 2 - 6px);
  background: white;
  box-shadow: 0px 4px 20px -10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;
export const MainContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: linear-gradient(
      0deg,
      rgba(168, 57, 0, 0.05),
      rgba(168, 57, 0, 0.05)
    ),
    #fffbff;
`;

export const LoginName = styled.h1`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  padding: 15px;
  color: #000000;
  border: 0px solid #000000;
`;

export const LoginDes = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #000000;
`;

export const LabelText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 5px 5px 5px;
`;

export const LabelTextEmail = styled.input`
  position: relative;
  width: 428px;
  height: 52px;
  border: 1px solid #d24900;
  border-radius: 20px;
  text-align: left;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const LabelTextTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 5px 5px 5px;
  margin: 0 0 1rem 0;
`;

export const LabelTextPassword = styled.input`
  position: relative;
  width: 428px;
  height: 52px;
  border: 1px solid #d24900;
  border-radius: 20px;
  text-align: left;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const ForgetText = styled(Link)`
  position: reletive;
  letter-spacing: 0.02em;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: left;
  line-height: 5px;
  padding: 20px;
  padding-left: 40px;
  color: #943100;

  margin: 2rem 0;

  &:hover {
    cursor: pointer;
  }
`;

export const LoginButton = styled.button`
  position: relative;
  width: 428px;
  height: 48px;
  left: 35px;
  margin: 2rem 0;
  ${"" /* // top: 315px; */}

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  background: var(--main-color);
  border-radius: 20px;
  border: 0px solid #d24900;
  color: #802a00;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Desc2 = styled.h3`
  position: relative;
  width: 200px;
  height: 21px;
  left: 165px;
  text-align: center;
  padding: 20px;

  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
`;

export const FacebookLoginButton = styled.button`
  position: relative;
  width: 428px;
  height: 48px;
  left: 35px;
  top: 20px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  color: #802a00;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;

  border: 0px solid #d24900;

  background: linear-gradient(
      0deg,
      rgba(168, 57, 0, 0.05),
      rgba(168, 57, 0, 0.05)
    ),
    #fffbff;

  &:hover {
    cursor: pointer;
  }
`;

export const GoogleLoginButton = styled.button`
  position: relative;
  width: 428px;
  height: 48px;
  left: 35px;
  top: 40px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  color: #802a00;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;

  border: 0px solid #d24900;

  background: linear-gradient(
      0deg,
      rgba(168, 57, 0, 0.05),
      rgba(168, 57, 0, 0.05)
    ),
    #fffbff;

  &:hover {
    cursor: pointer;
  }
`;

export const Desc3 = styled.h3`
  position: relative;
  width: 428px;
  height: 48px;
  left: 140px;
  top: 60px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;

  h3 {
    position: relative;
    width: 95px;
    height: 14px;
    left: 150px;
    top: -20px;
    color: red;

    &:hover {
      cursor: pointer;
    }
  }
`;
