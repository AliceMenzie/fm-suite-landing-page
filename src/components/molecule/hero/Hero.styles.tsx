import styled from "styled-components";

interface StyledProps {
  col?: boolean;
}

export const StyledHero = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding-bottom: 290px;
`;
export const StyledSection = styled.section<StyledProps>`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

