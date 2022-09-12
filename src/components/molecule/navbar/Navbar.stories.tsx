import React from "react";
import { storiesOf } from "@storybook/react";
// import { GlobalStyle } from "../../../App";
import { Navbar } from "./Navbar";

// addDecorator((s) => (
//   <>
//     <GlobalStyle />
//     {s()}
//   </>
// ));

storiesOf("Design System/Molecules", module).add("Navbar", () => <Navbar />);
