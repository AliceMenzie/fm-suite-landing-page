import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";

storiesOf("Design System/Atoms/Button", module).add("Primary", () => (
  <Button //type="button"
    label="Request Beta Access"
    appearance="plum"
    primary
  />
));

storiesOf("Design System/Atoms/Button", module).add("Secondary", () => (
  <Button
    // type="submit"
    label="Request Beta Access"
    appearance="plum"
  />
));
