import React from 'react'
import {Wrap, InputBox, Links, BtnSubmit} from './FormFive.styled'

function FormFive() {
  return (
    <Wrap>
    <form>
      <h2>Login</h2>
      <InputBox>
          <input type="text" required="required"/>
          <span>Username</span>
          <i></i>
      </InputBox>
      <InputBox>
          <input type="password" required="required"/>
          <span>Password</span>
          <i></i>
      </InputBox>
      <Links>
          <a href="##">Forgot Password?</a>
          <a href="##">Sign Up</a>
      </Links>
      <BtnSubmit type="submit" >Login</BtnSubmit>
    </form>
  </Wrap>
  )
}

export default FormFive
