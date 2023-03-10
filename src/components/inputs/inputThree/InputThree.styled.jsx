import styled from 'styled-components';


export const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  width: 532px;
  height: 50px;
  border-radius: 20px;
  box-shadow: 1px 9px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  margin-bottom: 20px;
  ::placeholder {
    text-align: center;
  }
  @media screen and (min-width: 200px) and (max-width: 420px) {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

`;

export const StyledSearch = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color:#313131;
  
`;