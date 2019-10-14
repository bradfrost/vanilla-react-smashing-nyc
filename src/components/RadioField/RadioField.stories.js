import React from "react";
import { storiesOf } from "@storybook/react";


import { RadioField } from "./RadioField";

let stories = storiesOf("Molecules/Forms/RadioField", module);



stories.add("Default", () => <RadioField />);

stories.add("Required", () => (
	<RadioField
		required={true}
		listItems={[
			{
				id: "radio-1",
				name: "radioexample",
				text: "Radio 1",
				type: "radio"
			},
			{
				id: "radio-2",
				name: "radioexample",
				text: "Radio 2",
				type: "radio"
			},
			{
				id: "radio-3",
				name: "radioexample",
				text: "Radio 3",
				type: "radio"
			}
		]}
		fieldNote="This is a required field"
	/>
));

stories.add("Disabled", () => (
	<RadioField
		fieldClass="c-field has-error"
		disabled
		listItems={[
			{
				id: "radio-1",
				name: "radioexample",
				text: "Radio 1",
				type: "radio",
				disabled: true
			},
			{
				id: "radio-2",
				name: "radioexample",
				text: "Radio 2",
				type: "radio",
				disabled: true
			},
			{
				id: "radio-3",
				name: "radioexample",
				text: "Radio 3",
				type: "radio",
				disabled: true
			}
		]}
		fieldNote="This is a disabled field"
	/>
));

stories.add("Error", () => (
	<RadioField
		fieldClass="c-field has-error"
		hasError
		listItems={[
			{
				id: "radio-1",
				name: "radioexample",
				text: "Radio 1",
				type: "radio"
			},
			{
				id: "radio-2",
				name: "radioexample",
				text: "Radio 2",
				type: "radio"
			},
			{
				id: "radio-3",
				name: "radioexample",
				text: "Radio 3",
				type: "radio"
			}
		]}
		fieldNote="This is a field with an error."
	/>
));
