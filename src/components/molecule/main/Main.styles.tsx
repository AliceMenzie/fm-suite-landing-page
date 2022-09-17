import styled from "styled-components";

export const StyledMain = styled.main`
  opacity: 0.999;
  max-width: 1110px;
  margin: 0 auto;
  background-color: #172339;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  @media (min-width: 700px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-evenly;
    height: 594px;
  }
`;
export const StyledContainer = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: #172339;
  display: flex;
  justify-content: center;
  align-items: start;
  @media (min-width: 1100px) {
    flex-basis: 500px;
  }
`;
export const StyledImgContainer = styled.div`
  background-color: #172339;
  display: flex;
  justify-content: center;
  align-items: start;
  border-radius: none;
  @media (min-width: 1100px) {
    align-items: center;
  }
`;
export const StyledArticle = styled.article`
  border-radius: 0 0 10px 10px;
  background-color: #172339;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  padding: 10px;
  p {
    align-self: center;
    text-align: center;
  }
  @media (min-width: 1100px) {
    row-gap: 50px;
    flex-basis: 390px;
    h2,
    p,
    div {
      align-self: start;
      text-align: start;
    }
  }
`;

export const StyledImg = styled.img`
  align-self: center;
  margin-top: -240px;
  margin-bottom: 40px;
  @media (min-width: 1100px) {
    margin-top: -105px;
    height: 700px;
  }
`;
export const StyledImgSecond = styled.img`
  background-color: "#172339";
  @media (min-width: 1100px) {
    margin-top: -190px;
  }
`;
