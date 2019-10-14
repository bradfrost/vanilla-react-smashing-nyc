import React from "react";
import { storiesOf } from "@storybook/react";



import { CardList } from "./CardList";

let stories = storiesOf("Organisms/Lists-And-Collections/CardList", module);



stories.add("Default", () => <CardList />);
