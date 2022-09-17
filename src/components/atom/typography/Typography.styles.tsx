import React from "react";
import styled from "styled-components";
// import { VariantProps } from "./Typography";

interface StyledProps {
  as?: React.ElementType;
  variant?: string;
  bold?: boolean;
  light?: boolean;
  appearance?: string;
}

export const StyledTypography = styled.div<StyledProps>`
  padding: 0;
  margin: 0;
  display: inline-block;
  color: ${(props) => (props.appearance ? `${props.appearance}` : "black")};
  /* XL */ // color: #172339;
  ${(props) =>
    props.variant === "xl" &&
    "font-size: 72px; letter-spacing: -1px; line-height: 78px;"}
  /* L */ // color: #172339;
  ${(props) =>
    props.variant === "l" &&
    `font-size: 42px;
     letter-spacing: -0.5px;
     line-height: 56px;
    @media (min-width: 700px) {
      font-size: 52px;
  }
    
    `}
  /* M */ //  color: #172339;
  ${(props) =>
    props.variant === "m" &&
    "font-size: 18px; letter-spacing: -0.2px; line-height: 32px; text-transform: uppercase;"}
  /* S */ // color: #49566D;
/* DS says -2.5 Char spacing */
  ${(props) =>
    props.variant === "s" &&
    "font-size: 16px; letter-spacing: 2.5px; line-height: 26px; text-transform: uppercase;"}
  /* Quote */ // color: #49566D;
  ${(props) =>
    props.variant === "quote" &&
    "font-size: 20px; letter-spacing: 0px; line-height: 35px;"}
  /* Body */
  ${(props) =>
    props.variant === "body" &&
    "font-size: 18px; letter-spacing: 0px; line-height: 32px; color: #49566D;"} 
  /* Footer */
  ${(props) =>
    props.variant === "footer" &&
    "font-size: 15px; letter-spacing: 0px; line-height: 32px; color: #49566D;"}
  /* Weight */ 
  ${(props) => {
    if (props.bold) {
      return `font-weight: 700;`;
    }
    if (props.light) {
      return `font-weight: 200;`;
    }
    return `font-weight: 400;`;
  }}
`;
