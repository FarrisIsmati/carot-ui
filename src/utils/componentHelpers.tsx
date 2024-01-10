import Type from "@/designSystem/Type";
import { ColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import React from "react";
import { RuleSet } from "styled-components";

// Converts a child that's a string to a type component, or leaves it as a JSX component
export const elementOrStringToTypeComponent = ({
	el,
	font,
	colorSet,
	letterSpacing,
}: {
	el: JSX.Element | React.ReactNode | string | number | undefined | null;
	font?: RuleSet<object>;
	colorSet?: ColorSet;
	letterSpacing?: string;
}) => {
	if (el !== undefined && el !== null) {
		if (React.isValidElement(el)) {
			// children is an element
			return el as JSX.Element;
		} else {
			// children is a string
			return (
				<Type
					semanticfont={font ?? semanticFonts.bodyMedium}
					colorSet={colorSet}
					letterSpacing={letterSpacing}
				>
					{el}
				</Type>
			);
		}
	}

	return null;
};
