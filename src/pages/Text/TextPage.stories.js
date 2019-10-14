import React from "react";
import { storiesOf } from "@storybook/react";


import { linkTo } from "@storybook/addon-links";
import { TextPage } from "./TextPage";

let stories = storiesOf("Pages/TextPage", module);



const navitems = [
	{
		href: false,
		text: "Nav Link 1",
		onClick: linkTo("Pages/TextPage", "Template")
	},
	{
		href: false,
		text: "Nav Link 2",
		onClick: linkTo("Pages/TextPage", "Blog Post")
	},
	{
		href: false,
		text: "Nav Link 3",
		onClick: linkTo("Pages/TextPage", "Legal Page")
	}
];

stories.add("Template", () => (
	<TextPage
		navitems={navitems}
		title="Text Page Template"
		description="This is the template description"
	>
		<p>
			A text passage contains arbitrary text that might come from a CMS.
			It should live within a container that caps the line length of the
			text to avoid a straining reading experience.
		</p>

		<h2>Heading 2</h2>

		<p>
			This is another paragraph of text. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>

		<ul>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ul>

		<h3>Heading 3</h3>

		<ol>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ol>

		<p>
			<a href="#x">Lorem ipsum dolor sit amet</a>, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>

		<blockquote>
			<p>This is a quotation from something.</p>
			<cite>Cite source</cite>
		</blockquote>

		<p>That is all.</p>
	</TextPage>
));

stories.add("Blog Post", () => (
	<TextPage
		navitems={navitems}
		title="This is a blog post"
		description="Posted by Author Name on [publication date]"
	>
		<p>
			A text passage contains arbitrary text that might come from a CMS.
			It should live within a container that caps the line length of the
			text to avoid a straining reading experience.
		</p>

		<h2>Heading 2</h2>

		<p>
			This is another paragraph of text. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>

		<ul>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ul>

		<h3>Heading 3</h3>

		<ol>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
			<li>Here is a unordered list item</li>
		</ol>

		<p>
			<a href="#x">Lorem ipsum dolor sit amet</a>, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>

		<blockquote>
			<p>This is a quotation from something.</p>
			<cite>Cite source</cite>
		</blockquote>

		<p>That is all.</p>
	</TextPage>
));

stories.add("Legal Page", () => (
	<TextPage
		navitems={navitems}
		title="Terms and Conditions"
		description="Last updated on [date]"
	>
		<p>
			A text passage contains arbitrary text that might come from a CMS.
			It should live within a container that caps the line length of the
			text to avoid a straining reading experience.
		</p>

		<h2>Heading 2</h2>

		<p>
			This is another paragraph of text. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</p>
	</TextPage>
));
