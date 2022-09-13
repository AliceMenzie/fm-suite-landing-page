import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #172339;
  display: flex;
  flex-direction: column;
`;
export const StyledContainer = styled.section`
  background-color: #172339;
  display: flex;
  justify-content: center;
  align-items: start;
`;
export const StyledArticle = styled.article`
  border: 1px solid red;
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
