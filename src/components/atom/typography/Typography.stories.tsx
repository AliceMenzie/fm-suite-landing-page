import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography } from "./Typography";

storiesOf("Design System/Atoms/Typography", module).add("Heading 1", () => (
  <Typography //type="button"
    as="h1"
  >
    Hello
  </Typography>
));
storiesOf("Design System/Atoms/Typography", module).add("Heading 2", () => (
  <Typography //type="button"
    as="h2"
  >
    Hello
  </Typography>
));
storiesOf("Design System/Atoms/Typography", module).add("Paragraph", () => (
  <Typography //type="button"
    as="p"
  >
    Hello
  </Typography>
));
