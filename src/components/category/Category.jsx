import React from "react";
import { NavLink } from "react-router-dom";
import {BtnWrap, LogBtn, InputBtn, BurgerBtn, ButtonsBtn} from './Category.styled'

function Category() {
  return (
    <BtnWrap>
         <NavLink to={'/'}>
        <LogBtn>Home</LogBtn>
      </NavLink>
      <NavLink to={'/login'}>
        <LogBtn>Login</LogBtn>
      </NavLink>
      <NavLink to={'/searchinput'}>
        <InputBtn>Inputs</InputBtn>
      </NavLink>
      <NavLink to={'/burger'}>
        <BurgerBtn>Burgers</BurgerBtn>
      </NavLink>
      <NavLink to={'/buttons'}>
        <ButtonsBtn>Buttons</ButtonsBtn>
      </NavLink>
    </BtnWrap>
  );
}

export default Category;
