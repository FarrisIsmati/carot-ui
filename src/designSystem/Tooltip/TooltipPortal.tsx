import { spacer320, spacer8 } from "@/styles/sizes";
import React, { ReactNode } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import PlainTooltip from "./PlainTooltip";

const TooltipContainer = styled.div<{ maxWidth: string }>`
	visibility: hidden;
	z-index: 1;
	&[data-show="true"] {
		visibility: visible;
	}
	max-width: ${(props) => props.maxWidth};
`;

const PaddingContainer = styled.div`
	padding-left: ${spacer8};
`;

interface TooltipPortalProps {
	tooltip: NonNullable<ReactNode>;
	maxWidth?: string;
	children?: React.ReactNode;
}

const TooltipPortal = ({
	tooltip,
	maxWidth = spacer320,
	children,
}: TooltipPortalProps) => {
	const [referenceElement, setReferenceElement] =
		React.useState<HTMLDivElement>();
	const [popperElement, setPopperElement] = React.useState<HTMLDivElement>();

	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		placement: "right",
		modifiers: [
			{
				name: "offset",
				options: {
					offset: [0, 0], // [skidding, distance]
				},
			},
		],
	});

	return (
		<div>
			<div
				// @ts-ignore
				ref={setReferenceElement}
				onMouseEnter={() => {
					if (popperElement) {
						popperElement.setAttribute("data-show", "true");
					}
				}}
				onMouseLeave={() => {
					if (popperElement) {
						popperElement.removeAttribute("data-show");
					}
				}}
			>
				{children}
			</div>
			<TooltipContainer
				// @ts-ignore
				ref={setPopperElement}
				style={styles.popper}
				{...attributes.popper}
				onMouseEnter={() => {
					if (popperElement) {
						popperElement.setAttribute("data-show", "true");
					}
				}}
				onMouseLeave={() => {
					if (popperElement) {
						popperElement.removeAttribute("data-show");
					}
				}}
				maxWidth={maxWidth}
			>
				<PaddingContainer>
					<PlainTooltip>{tooltip}</PlainTooltip>
				</PaddingContainer>
			</TooltipContainer>
		</div>
	);
};

export default TooltipPortal;
