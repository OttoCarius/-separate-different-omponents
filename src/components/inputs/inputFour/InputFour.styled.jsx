import styled from 'styled-components';


export const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2em;
  width: 500px;
  height: 60px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #2371c0 0%, #afaf83  51%, #1f6ab6  100%);
  box-shadow: 8px 9px 20px 10px rgba(0, 0, 0, 0.553);
  padding-left: 20px;
  display: flex;
  margin-bottom: 20px;
  ::placeholder {
    text-align: left;
    letter-spacing: 0.8em;
    color: #e3d8d8;
    padding-left: 10px;
  }
  @media (max-width: 420px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 0.1em;
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
  color: #fff;

  
`;         


 