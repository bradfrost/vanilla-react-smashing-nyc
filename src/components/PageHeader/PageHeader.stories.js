import React from "react";
import { storiesOf } from "@storybook/react";


import { PageHeader } from "./PageHeader";

let stories = storiesOf("Molecules/Text/PageHeader", module);



stories.add("Default", () => <PageHeader />);
