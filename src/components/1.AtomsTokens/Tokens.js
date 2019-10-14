import React, { Component } from "react";
import "../../css/styleguide.css";
import brandColors from "../../data/brand-colors.json";
import neutralColors from "../../data/neutral-colors.json";
import utilityColors from "../../data/utility-colors.json";
import PropTypes from "prop-types";
import { Colors } from "./Colors";
import { FontFamilies } from "./FontFamilies";
import { FontSizes } from "./FontSizes";
import { Section } from "../Section/Section";

export class Tokens extends Component {
    render() {
        return (
            <React.Fragment>
                <Section title="Brand Colors">
                    <Colors listItems={brandColors.items} />
                </Section>

                <Section title="Neutral Colors">
                    <Colors listItems={neutralColors.items} />
                </Section>

                <Section title="Utility Colors">
                    <Colors listItems={utilityColors.items} />
                </Section>

                <Section title="Font Families">
                    <FontFamilies />
                </Section>

                <Section title="Font Sizes">
                    <FontSizes />
                </Section>
            </React.Fragment>
        );
    }
}

Colors.propTypes = {
    listItems: PropTypes.array,
    value: PropTypes.string,
    name: PropTypes.string,
    comment: PropTypes.string
};

Colors.defaultProps = {
    listItems: brandColors.items
};
