import React from "react";
import styled from "styled-components";

interface StyledProps {
  as?: React.ElementType;
}

export const StyledTyporgraphy = styled.div<StyledProps>`
  color: navy;
  font-size: 16px;
`;
