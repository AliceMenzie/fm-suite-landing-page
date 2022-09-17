import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #f3ede7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0px;
  row-gap: 25px;
  margin-top: -10px;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    /* padding-top: 440px;
    margin-top: -380px; */
    /* temporary causing white line behind main */
    padding-top: 300px;
    margin-top: -250px;
    padding-left: 16px;
    padding-right: 16px;
    h5,
    p,
    div {
      align-self: center;
    }

    h5 {
      font-size: 32px;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;
