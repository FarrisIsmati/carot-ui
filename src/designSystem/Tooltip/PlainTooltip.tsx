import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer1, spacer12, spacer4, spacer8 } from "@/styles/sizes";
import { elementOrStringToTypeComponent } from "@/utils/componentHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { RichTooltipProps } from "./RichTooltip";

export type PlainTooltipProps = Omit<
	RichTooltipProps,
	| "firstAction"
	| "secondAction"
	| "firstActionName"
	| "secondActionName"
	| "title"
> & {};

export const StyledPlainTooltip = styled(
	React.forwardRef<JSX.Element, PlainTooltipProps>(function PlainTooltip(
		{ component: Component = "div", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => css`
		border-radius: ${spacer4};
		padding: ${spacer12};
		color: ${props.colorSet?.text.default};
		background-color: ${props.colorSet?.essential.default};
		width: fit-content;
		height: fit-content;
	`}
`;

const StyledPlainTooltipContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const PlainTooltip = React.forwardRef<HTMLElement, PlainTooltipProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.DARK),
			body,
			component,
			semanticfont = semanticFonts.bodyExtraSmall,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const BodyComponent = elementOrStringToTypeComponent({
			el: body,
			font: semanticfont,
			colorSet: colorSet,
			letterSpacing: spacer1,
		});
		const ChildrenComponent = elementOrStringToTypeComponent({
			el: children,
			font: semanticfont,
			colorSet: colorSet,
			letterSpacing: spacer1,
		});
		return (
			<StyledPlainTooltip
				ref={ref}
				component={!component && props.href ? "a" : component}
				colorset={colorSet}
				{...props}
			>
				<StyledPlainTooltipContentContainer>
					{BodyComponent}
					{ChildrenComponent}
				</StyledPlainTooltipContentContainer>
			</StyledPlainTooltip>
		);
	}
);

export default PlainTooltip;
