import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #172339;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
export const StyledContainer = styled.section`
  border-radius: 10px;
  background-color: #172339;
  display: flex;
  justify-content: center;
  align-items: start;
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
