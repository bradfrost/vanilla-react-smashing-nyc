import React from "react";
import { storiesOf } from "@storybook/react";


import { PrimaryNav } from "./PrimaryNav";

let stories = storiesOf("Molecules/Navigation/PrimaryNav", module);



stories.add("Default", () => <PrimaryNav />);
