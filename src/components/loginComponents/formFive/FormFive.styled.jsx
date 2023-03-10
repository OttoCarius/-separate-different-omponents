import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 440px;
  background-color: transparent;
  border-radius: 20px;

  position: relative;
  overflow: hidden;

  @media (max-width: 420px) {
    width: 340px;
    height: 440px;
  }

  @media (max-width: 340px) {
    width: 300px;
    height: 440px;
  }


  ::before {
    content: "";
    position: absolute;
    top: -50%;
    left: 50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #1b1c1c,
      #1b1c1c,
      #1b1c1c
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }

  ::after {
    content: "";
    position: absolute;
    top: -50%;
    left: 50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #fbf7f7,
      #f8f9f5,
      #f9f9f9
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -10s;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  form {
    position: absolute;
    inset: 4px;
    background-color: #e5cfcf;
    padding: 50px 40px;
    border-radius: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #151414;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
  }

  
`;

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 35px;

  @media (max-width: 440px) {
    width: 280px;

  }

  @media (max-width: 340px) {
    width: 240px;

  }

  input {
    position: relative;
    width: 100%;
    padding: 20px 0 10px;
    background: transparent;
    outline: none;
    box-shadow: none;
    color: #313131;
    font-size: 1rem;
    letter-spacing: 0.2em;
    transition: 0.5s;
    z-index: 10;
  }

  span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    pointer-events: none;
    color: #8f8f8f8f;
    font-size: 1em;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: #151414;
    font-size: 1em;
    transform: translateY(-34px);
  }
  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    transition: 0.5s;
    pointer-events: none;
  }

  input:valid ~ i,
  input:focus ~ i {
    height: 45px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin: 20px 0;
    font-size: 0.75em;
    color: #8f8f8f;
    text-decoration: none;

    :hover,
    :nth-child(2) {
      margin-left: 10px;
      color: #151414;
    }
  }
`;

export const BtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  border: 2px solid #0f0e0e;
  outline: none;
  padding: 14px 28px;
  background: #fff;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 20px;
  font-weight: 600;
  margin-top: 10px;
  .active {
    opacity: 0.8;
  }
`;

