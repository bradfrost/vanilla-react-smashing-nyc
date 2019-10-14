import React, { Component } from "react";
import { Headings } from "./Headings";
import { Paragraph } from "./Paragraph";
import { Blockquote } from "./Blockquote";
import { Hr } from "./Hr";
import { InlineElements } from "./InlineElements";
import { OrderedList } from "./OrderedList";
import { UnorderedList } from "./UnorderedList";

export class AtomsText extends Component {
	render() {
		return (
			<div style={{ padding: "2rem" }}>
				<p>
					This story demonstrates the default base styles for HTML
					text elements. These components are for demonstration only
					and aren't meant to be functional.
				</p>
				<Headings />
				<Hr />
				<Paragraph />
				<Hr />
				<InlineElements />
				<Hr />
				<Blockquote />
				<Hr />
				<OrderedList />
				<Hr />
				<UnorderedList />
			</div>
		);
	}
}
