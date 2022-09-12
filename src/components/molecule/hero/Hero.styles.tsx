import styled from "styled-components";

interface StyledProps {
  flexCol?: boolean;
}

export const StyledHero = styled.header`
  background: red;
`;
export const StyledSection = styled.section<StyledProps>`
  background: plum;
`;
