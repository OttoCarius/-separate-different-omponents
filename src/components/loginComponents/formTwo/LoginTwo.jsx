import React from "react";
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  LoginLabel,
  LoginInput,
  PasswordLabel,
  PasswordInput,
  BtnWrap,
  BtnLogin,
  LinkRegister,
} from "./LoginTwo.styled";

export default function LoginTwo() {
  return (
    <div>
      <LoginContainer className="container">
        <LoginForm>
          <LoginTitle className="login-title">Авторизація</LoginTitle>
          <LoginLabel>
            <LoginInput type="text" placeholder="Логін" />
          </LoginLabel>
          <PasswordLabel>
            <PasswordInput type="password" placeholder="Пароль" />
          </PasswordLabel>
          <BtnWrap>
            <BtnLogin type="submit" className="btn-login">
              Увійти
            </BtnLogin>
            <LinkRegister href="##">Немає облікового запису?</LinkRegister>
          </BtnWrap>
        </LoginForm>
      </LoginContainer>
    </div>
  );
}
