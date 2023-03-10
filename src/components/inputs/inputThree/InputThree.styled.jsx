import styled from 'styled-components';


export const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  width: 532px;
  height: 50px;
  border-radius: 20px;
  box-shadow: 8px 9px 20px 10px rgba(0, 0, 0, 0.6);
  text-align: center;
  display: flex;
  margin-bottom: 20px;
  ::placeholder {
    text-align: center;
  }
  @media (max-width: 420px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 0.9em;
    font-size: 12px;
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