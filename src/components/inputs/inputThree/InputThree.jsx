import React from 'react'
import {StyledSearch, StyledInput } from './InputThree.styled';

function InputThree() {
  return (
    <StyledSearch>
      <StyledInput
      type="text"
      name="filter"
      placeholder="Find something"
    />
    </StyledSearch>
  )
}

export default InputThree
