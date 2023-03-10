import styled from "styled-components";

export const FormBox = styled.div`
  position: relative;
  width: 400px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 3px solid rgba(255,255,255, 0.5);
  border-radius: 25px;
  backdrop-filter: blur(35px);

 

  @media (max-width: 440px) {
    width: 280px;
  }
`;



export const FormValue = styled.div`
  form {
  }

  h2 {
    font-size: 26px;
    color: white;
    text-align: center;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin: 30px 0;
  width: 200px;
  border-bottom: 2px solid #fff;

  input {
    width: 100%;
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 0 20px 0 5px;
    color: #fff;
  }

  label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 16px;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -8px;
  }
`;

export const Forget = styled.div`
  margin: -15px 0 15px;
  font-size: 14px;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  label {
    margin-top: 10px;  
  }  
`;

export const LogButton = styled.button`
  width: 200px;
  height: 32px;
  border-radius: 40px;
  background-color: #fff;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
 margin: 20px 0;
`;

export const Register = styled.div`
font-size: 14px;
color:#fff;
text-align: center;

  p {
    text-decoration: none;
    color: #ffff;
    font-weight: 600;
    margin-top: 10px;  
  }
  
  a {
    margin-top: 10px;
    color: #13439e;
    text-decoration: none;
    margin-left:5px;
    :hover {
      text-decoration: underline;
    }
  }
`;
