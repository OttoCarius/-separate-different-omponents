import React from "react";
import {
  StyledSearch,
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledInput,
} from "./InputOne.styled";
import { BsSearch } from "react-icons/bs";

function InputOne() {
  return (
    <StyledSearch>
      <StyledForm>
        <StyledButton type="submit">
          <BsSearch size="20px" color="#fff" />
          <StyledLabel> Search</StyledLabel>
        </StyledButton>
        <StyledInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder=""
        />
      </StyledForm>
    </StyledSearch>
  );
}

export default InputOne;
