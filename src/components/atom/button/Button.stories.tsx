import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { Button } from "./Button";
import { GlobalStyle } from "../../../App";

addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
));

storiesOf("Design System/Atoms/Button", module).add("Primary", () => (
  <Button //type="button"
    label="Request Beta Access"
    primary
  />
));

storiesOf("Design System/Atoms/Button", module).add("Secondary", () => (
  <Button
    // type="submit"
    label="Request Beta Access"
  />
));
