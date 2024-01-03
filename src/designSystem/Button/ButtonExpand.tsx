import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer10, spacer4 } from "@/styles/sizes";
import React from "react";
import styled, { css } from "styled-components";
import CheveronDown from "../Icons/CheveronDown";
import CheveronUp from "../Icons/CheveronUp";
import { ButtonTextProps } from "./ButtonText";

export const StyledExpandButton = styled(
	React.forwardRef<HTMLElement, ButtonTextProps & ButtonExpandProps>(
		function Button(
			{ component: Component = "button", colorset, ...props },
			ref
		) {
			return <Component {...props} ref={ref} />;
		}
	)
)`
	${(props) => {
		return css`
			${props.semanticfont}
			color: ${props.color};
			background-color: transparent;
			border: none;
			padding: ${spacer10} 0;
			display: flex;
			gap: ${spacer4};
			align-items: center;

			&:disabled {
				color: ${props.colorset?.text.disabled};
			}

			&:hover:not([disabled]) {
				cursor: pointer;
			}

			&:active:not([disabled]) {
				cursor: pointer;
			}
		`;
	}}
`;

type ButtonExpandProps = {
	/**
	 * Sets whether or not the button is expanded
	 * @default false
	 **/
	isExpanded?: boolean;
	/**
	 * Text when collapsed
	 */
	collapsedText?: string;
	/**
	 * Text when expanded
	 */
	expandedText?: string;
};

const getContent = ({
	isExpanded,
	collapsedText,
	expandedText,
	children,
}: {
	isExpanded: boolean;
	collapsedText?: string;
	expandedText?: string;
	children?: React.ReactNode;
}) => {
	if (collapsedText && expandedText) {
		if (!isExpanded) {
			return collapsedText;
		} else {
			return expandedText;
		}
	}
	return children;
};

const ButtonExpand = React.forwardRef<
	HTMLElement,
	ButtonTextProps & ButtonExpandProps
>(
	(
		{
			colorset = getColorSet(SemanticSetCores.BASE),
			component,
			children,
			navigate,
			onClick,
			collapsedText,
			expandedText,
			isExpanded = false,
			color = colorset.text.default,
			semanticfont = semanticFonts.bodySmall,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const content = getContent({
			collapsedText,
			expandedText,
			children,
			isExpanded,
		});
		return (
			<StyledExpandButton
				ref={ref}
				component={component}
				onMouseDown={(e: React.MouseEvent<any, MouseEvent>) =>
					e.preventDefault()
				}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorset={colorset}
				color={color}
				onClick={onClick}
				semanticfont={semanticfont}
				isExpanded={isExpanded}
				{...props}
			>
				{content}
				{isExpanded ? (
					<CheveronUp colorSet={colorset} />
				) : (
					<CheveronDown colorSet={colorset} />
				)}
			</StyledExpandButton>
		);
	}
);

export default ButtonExpand;
