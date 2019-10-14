import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";


import { Textarea } from "./Textarea";

let stories = storiesOf("Atoms/Forms/Textarea", module);



stories.add("Default", () => <Textarea />);
