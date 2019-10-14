import React from "react";
import { storiesOf } from "@storybook/react";


import { TextareaField } from "./TextareaField";

let stories = storiesOf("Molecules/Forms/TextareaField", module);



stories.add("Default", () => (
	<TextareaField
		fieldNote="This is a field note"
		ariaDescribedBy="textarea-field"
	/>
));

stories.add("Required", () => (
	<TextareaField
		name="text-field-1"
		label="Label"
		type="text"
		required={true}
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="This is a required field."
		ariaDescribedBy="required-textarea-field"
	/>
));

stories.add("Disabled", () => (
	<TextareaField
		name="text-field-1"
		label="Label"
		type="text"
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="The is a disabled field."
		ariaDescribedBy="disabled-textarea-field"
		disabled
	/>
));

stories.add("Error", () => (
	<TextareaField
		hasError
		name="text-field-1"
		label="Label"
		type="text"
		required
		placeholder="Placeholder"
		title="Please enter the proper text into the field."
		fieldNote="There is an error."
		ariaDescribedBy="error-textarea-field"
	/>
));
