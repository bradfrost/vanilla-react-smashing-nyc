import React from "react";
import { storiesOf } from "@storybook/react";


import { Logo } from "./Logo";

import logoimg from "../../images/fpo-120x60.png";

let stories = storiesOf("Molecules/Global/Logo", module);



stories.add("Default", () => (
	<Logo href="http://bradfrost.com" src={logoimg} alt="Company Name" />
));
