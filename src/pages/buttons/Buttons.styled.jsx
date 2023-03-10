import styled from "styled-components";

export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 60px;
  column-gap: 40px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    margin: 50px 20px;
  }

  @media (max-width: 440px) {
    justify-content: center;
    flex-direction: column;
    gap: 70px;
  }
`;
