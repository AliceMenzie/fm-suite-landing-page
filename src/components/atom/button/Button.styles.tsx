import styled from "styled-components";

interface StyledProps {
  appearance?: string;
  primary?: boolean;
}

export const StyledButton = styled.button<StyledProps>`
  background-color: ${(props) => (props.primary ? "red" : "blue")};
`;
