import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #f3ede7;
`;

export const StyledDiv = styled.div`
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
    /* temporary causing white line behind main */
    padding-top: 300px;
    margin-top: -250px;
    /* ------------- */
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
  @media (min-width: 1100px) {
    max-width: 1100px;
    margin: -250px auto;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;
