import styled from "styled-components";

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;


  @media (max-width: 440px) {
    margin: 0 20px;
  }



  h2 {
    font-size: 36px;
    margin-top: 160px;
    margin-bottom: 60px;
    font-family: Roboto, Arial, sans-serif;
    background-color: #2aa5a0;
    background-image: linear-gradient(90deg, #e3535d, #2aa5a0);
    -webkit-background-clip: text;
    background-clip: #2aa5a0;
    -webkit-text-fill-color: transparent;
    text-align: center;

    @media (max-width: 460px) {
    font-size: 26px;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  }

 

  p {
    font-size: 28px;
    font-family: Roboto, Arial, sans-serif;
    background-color: #2aa5a0;
    background-image: linear-gradient(90deg, #ad3687, #117777);
    -webkit-background-clip: text;
    background-clip: #2aa5a0;
    -webkit-text-fill-color: transparent;
    text-align: center;
    
    @media (max-width: 460px) {
    font-size: 20px;
  }
  }

 
  
`;
