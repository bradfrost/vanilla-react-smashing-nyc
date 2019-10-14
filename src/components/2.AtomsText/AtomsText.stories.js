import React from "react";
import { storiesOf } from "@storybook/react";
import { AtomsText } from "./AtomsText";

let stories = storiesOf("Atoms/Text", module);

stories.add("Text Elements", () => <AtomsText />);
