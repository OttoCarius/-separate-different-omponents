import React from "react";
import { WrapForms } from "./LoginComponents.styled";
import FormOne from "./FormOne/FormOne";
import LoginTwo from "./formTwo/LoginTwo";
import FormThree from "./formThree/FormThree";
import FormFour from "./formFour/FormFour";
import FormFive from "./formFive/FormFive";

function LoginComponents() {
  return (
    <WrapForms>
      <FormFour />
      <FormOne />
      <FormFive/>
      <LoginTwo />
      <FormThree />
    </WrapForms>
  );
}

export default LoginComponents;
