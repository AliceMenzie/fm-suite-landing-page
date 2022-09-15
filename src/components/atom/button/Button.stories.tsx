import { addDecorator } from "@storybook/react";
import { Button } from "./Button";
import { GlobalStyle } from "../../../App";

addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
));

export default { title: "Design System/Atoms/Button" };
export const Primary = () => <Button label="Request Beta Access" primary />;
export const Secondary = () => <Button label="Request Beta Access" />;
