import React from 'react'
import {Wrap, InputBox, Links, BtnSubmit} from './FormFour.styled'

function FormFour() {
  return (
    <Wrap>
      <form>
        <h2>Sign In</h2>
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

export default FormFour
