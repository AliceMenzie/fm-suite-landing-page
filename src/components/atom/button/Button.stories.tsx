import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Design System/Atoms/Button", module).add("Primary", () => (
  <Button //type="button"
    label="Click Me"
    appearance="plum"
    primary
  />
));

storiesOf("Design System/Atoms/Button", module).add("Secondary", () => (
  <Button
    // type="submit"
    label="Click Me"
    appearance="plum"
  />
));
