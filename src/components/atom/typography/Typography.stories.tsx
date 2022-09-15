import { Typography } from "./Typography";

export default { title: "Design System/Atoms/Typography" };
export const heading1 = () => (
  <Typography as="h1" variant="xl">
    XL text as h1
  </Typography>
);
export const heading1Bold = () => (
  <Typography as="h1" variant="xl" bold>
    XL text as h1 Bold
  </Typography>
);
export const Paragraph = () => (
  <Typography as="p" variant="">
    M text as paragraph
  </Typography>
);
export const headingS = () => (
  <Typography as="h4" variant="s">
    ante et vulputate volutpat
  </Typography>
);
export const Quote = () => (
  <Typography as="p" variant="quote">
    ante et vulputate volutpat
  </Typography>
);
