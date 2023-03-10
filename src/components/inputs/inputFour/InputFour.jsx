import React from 'react'
import {StyledSearch, StyledInput } from './InputFour.styled';

function InputFour() {
  return (
    <StyledSearch>
    <StyledInput
    type="text"
    name="filter"
    placeholder="Search something"
  />
  </StyledSearch>
  )
}

export default InputFour
