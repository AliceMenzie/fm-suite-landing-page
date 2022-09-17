import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #172339;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  /* padding-top: 240px; */
  border: 1px solid red;
  /* height: 930px; */
  @media (min-width: 700px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;
export const StyledContainer = styled.div`
  border-radius: 10px 10px 0 0;
  background-color: #172339;
  display: flex;
  justify-content: center;
  align-items: start;
`;
export const StyledImgContainer = styled.div`
  background-color: #172339;
  display: flex;
  justify-content: center;
  align-items: start;
  border-radius: none;
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
`;
