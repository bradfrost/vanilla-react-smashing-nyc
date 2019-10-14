import React from "react";
import { storiesOf } from "@storybook/react";
import { Tokens } from "./Tokens";

let stories = storiesOf("Atoms", module);

stories.add("Design Tokens", () => <Tokens />);
