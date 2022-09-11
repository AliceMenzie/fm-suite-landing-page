import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography } from "./Typography";

storiesOf("Design System/Atoms/Button", module).add("Primary", () => (
  <Typography //type="button"
    as="h2"
  >
    Hello
  </Typography>
));
