import React from 'react'
import {
    StyledSearch,
    StyledForm,
    StyledButton,
    StyledLabel,
    StyledInput,
  } from './InputTwo.styled';
  import { BsSearch } from 'react-icons/bs';

function InputTwo() {
  return (
    <StyledSearch>
    <StyledForm>
      <StyledButton type="submit">
        <BsSearch size="20px" color="#003322" />
        <StyledLabel> Search</StyledLabel>
      </StyledButton>
      <StyledInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search something"
      />
    </StyledForm>
  </StyledSearch>
  )
}

export default InputTwo
