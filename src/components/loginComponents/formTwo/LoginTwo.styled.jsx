import styled from "styled-components";


export const LoginContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 400px;
  height: 440px;
  border: 3px solid rgba(255,255,255, 0.5);
  border-radius: 25px;
  backdrop-filter: blur(35px);

  @media (max-width: 420px) {
    width: 340px;
    height: 440px;
  }

  @media (max-width: 340px) {
    width: 300px;
    height: 440px;
  }


`;

export const LoginForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 70px;
  
`;

export const LoginTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 28px;
  color: white;
  margin-bottom: 50px;
`;

export const LoginLabel = styled.label`
  font-size: 24px;
  color: aliceblue;
`;

export const LoginInput = styled.input`
  color: black;
  width: 260px;
  border-radius: 20px;
  background-color: azure;
  border: 2px solid;
  border-color: cadetblue;
  padding: 6px 10px;
  font-size: 18px;
  outline: none;
  margin-bottom: 40px;
  /* ::placeholder {
    text-align: center;
  } */
  @media (max-width: 620px) {
    width: 220px;
  }
`;

export const PasswordLabel = styled.label`
  font-size: 24px;
  color: aliceblue;
`;

export const PasswordInput = styled.input`
  color: black;
  width: 260px;
  border-radius: 20px;
  background-color: azure;
  border: 2px solid;
  border-color: cadetblue;
  padding: 6px 10px;
  font-size: 18px;
  outline: none;
  @media (max-width: 620px) {
    width: 220px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const BtnLogin = styled.button`
  border-radius: 20px;
  background-color: cadetblue;
  color: aliceblue;
  padding: 8px 12px;
  width: 260px;
  transition: opacity 0.2s ease-in;
  &:active {
    position: relative;
    top: 1px;
  }
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 620px) {
    width: 200px;
  }
`;

export const LinkRegister = styled.a`
  margin-top: 16px;
  color: rgba(38, 137, 236, 0.932);
`;