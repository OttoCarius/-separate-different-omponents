import React from 'react'
import {InputWrap} from './SearchInput.styled'
import InputOne from '../../components/inputs/inputOne/InputOne'
import InputTwo from '../../components/inputs/inputTwo/InputTwo'
import InputThree from '../../components/inputs/inputThree/InputThree'
import InputFour from '../../components/inputs/inputFour/InputFour'

function SearchInput() {
  return (
    <InputWrap>
      <InputOne/>
      <InputTwo/>
      <InputThree/>
      <InputFour/>
    </InputWrap>
  )
}

export default SearchInput
