import React from "react";
import {
  FormBox,
  FormValue,
  InputBox,
  Forget,
  LogButton,
  Register,
} from "./FormOne.styled";

function FormOne() {
  return (
    <FormBox>
      <FormValue>
        <form action="">
          <h2>Login</h2>
          <InputBox>
            <input type="email" required />
            <label htmlFor="">Email</label>
          </InputBox>
          <InputBox>
            <input type="password" required />
            <label htmlFor="">Password</label>
          </InputBox>
          <Forget>
            <label htmlFor="">
              <input type="checkbox" />
              Remember Me
            </label>
          </Forget>
          <LogButton>Log In</LogButton>

          <Register>
            <a href="##">Forget password?</a>
            <p>
              Don't have account? <a href="##">Register</a>
            </p>
          </Register>
        </form>
      </FormValue>
    </FormBox>
  );
}

export default FormOne;
