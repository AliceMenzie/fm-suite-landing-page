import React from "react";
import styled from "styled-components";
// import { VariantProps } from "./Typography";

interface StyledProps {
  // as?: React.ElementType;
  variant?: string;
  bold?: boolean;
}

export const StyledTypography = styled.div<StyledProps>`
  padding: 0;
  margin: 0;
  display: inline-block;
  /* XL */
  ${(props) =>
    props.variant === "xl" &&
    "font-size: 72px; letter-spacing: -1px; line-height: 78px; color: #172339;"}
  /* L */
  ${(props) =>
    props.variant === "l" &&
    "font-size: 42px; letter-spacing: -0.5px; line-height: 56px; color: #172339;"}
  /* M */
  ${(props) =>
    props.variant === "m" &&
    "font-size: 18px; letter-spacing: -0.2px; line-height: 32px; color: #172339; text-transform: uppercase;"}
  /* S */
/* DS says -2.5 Char spacing */
  ${(props) =>
    props.variant === "s" &&
    "font-size: 16px; letter-spacing: 2.5px; line-height: 26px; color: #49566D; text-transform: uppercase;"}
  /* Quote */
  ${(props) =>
    props.variant === "quote" &&
    "font-size: 20px; letter-spacing: 0px; line-height: 35px; color: #49566D;"}
  /* Body */
  ${(props) =>
    props.variant === "body" &&
    "font-size: 18px; letter-spacing: 0px; line-height: 32px; color: #49566D;"} 
  /* Footer */
  ${(props) =>
    props.variant === "footer" &&
    "font-size: 15px; letter-spacing: 0px; line-height: 32px; color: #49566D;"}
  /* Bold */
  font-weight: ${(props) => (props.bold ? "700" : "400")};
`;
