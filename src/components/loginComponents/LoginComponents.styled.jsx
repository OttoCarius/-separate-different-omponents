import styled from "styled-components";

export const WrapForms = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 60px;
	row-gap: 100px;
	flex-wrap: wrap;
    margin: 60px 40px;

    @media (max-width: 940px) {
   flex-direction: column;
   margin: 50px 10px;
  }
`

