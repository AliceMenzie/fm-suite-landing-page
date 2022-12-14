import styled from "styled-components";

interface StyledProps {
  appearance?: string;
  primary?: boolean;
}

// colors
//  white #FAF8F6
// cream #F3EDE7
// blueGrey #49566D
// darkBlue #172339

export const StyledButton = styled.button<StyledProps>`
  /* all: unset; */
  font-family: inherit;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font-weight: bold;
  /* font: inherit; use this to chain all font related */
  font-size: 14px;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => (props.primary ? "#172339" : "transparent")};
  color: ${(props) => (props.primary ? "#FAF8F6" : "#172339")};
  border: ${(props) => (props.primary ? "transparent" : "1px solid #172339")};
  height: ${(props) => (props.primary ? "3.813rem" : "48px")};
  width: ${(props) => (props.primary ? "16rem" : "182px")};
  border-radius: 0.313rem;

  :hover {
    background-color: ${(props) => (props.primary ? "none" : "#172339")};
    border: ${(props) => (props.primary ? "transparent" : "1px solid #172339")};
    color: ${(props) => (props.primary ? "#FAF8F6" : "white")};
    ${(props) =>
      props.primary &&
      "background-image: linear-gradient(159deg, rgba(160,96,255,1) 0%, rgba(203,48,227,1) 35%, rgba(255,168,78,1) 89%);"}
  }

  @media (min-width: 700px) {
    width: ${(props) => (props.primary ? "16rem" : "219px")};
  }

`;
