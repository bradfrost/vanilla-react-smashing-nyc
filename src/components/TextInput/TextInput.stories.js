import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";


import { TextInput } from "./TextInput";

let stories = storiesOf("Atoms/Forms/TextInput", module);



stories.add("Default", () => <TextInput />);
