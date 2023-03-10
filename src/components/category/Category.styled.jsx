import styled from "styled-components";

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 10px;

  row-gap: 10px;
  flex-wrap: wrap;
`;

export const LogBtn = styled.button`
  padding: 16px 26px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 100% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border-radius: 20px;
  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 940px) {
    padding: 8px 16px;
  }
`;

export const InputBtn = styled.button`
  padding: 16px 26px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border-radius: 20px;
  color: white;
  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 940px) {
    padding: 8px 16px;
  }
`;

export const BurgerBtn = styled.button`
  padding: 16px 22px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border-radius: 20px;
  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 940px) {
    padding: 8px 16px;
  }
`;

export const ButtonsBtn = styled.button`
  padding: 16px 22px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border-radius: 20px;
  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 940px) {
    padding: 8px 16px;
  }
`;
