import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography } from "./Typography";

storiesOf("Design System/Atoms/Typography", module).add("Heading 1", () => (
  <Typography as="h1" variant="xl">
    XL text as h1
  </Typography>
));
storiesOf("Design System/Atoms/Typography", module).add(
  "Bold Heading 1",
  () => (
    <Typography bold as="h1" variant="xl">
      XL text as h1 bold
    </Typography>
  )
);
storiesOf("Design System/Atoms/Typography", module).add("Heading 2", () => (
  <Typography as="h2" variant="l">
    L text as h2
  </Typography>
));
storiesOf("Design System/Atoms/Typography", module).add(
  "Bold Heading 2",
  () => (
    <Typography as="h2" variant="l" bold>
      L text as h2 bold
    </Typography>
  )
);
storiesOf("Design System/Atoms/Typography", module).add("Paragraph", () => (
  <Typography as="p" variant="m">
    M text as paragraph
  </Typography>
));
storiesOf("Design System/Atoms/Typography", module).add("Heading S", () => (
  <Typography as="h4" variant="s">
    ante et vulputate volutpat
  </Typography>
));
storiesOf("Design System/Atoms/Typography", module).add("Quote", () => (
  <Typography as="h4" variant="quote" light>
    light quote ante et vulputate volutpat
  </Typography>
));
