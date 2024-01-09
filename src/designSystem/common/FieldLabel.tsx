import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled from "styled-components";
import InfoIcon from "../Icons/InfoIcon";
import TooltipPortal from "../Tooltip/TooltipPortal";
import Type from "../Type";

export const LabelContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${spacer8};
`;

export type FieldLabelProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * If true adds styling to indicate error state
		 */
		error?: boolean;
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
		/**
		 * Info tooltip on hover
		 */
		tooltip?: string;
	};

const FieldLabel = React.forwardRef<HTMLElement, FieldLabelProps>(
	function FieldLabel(
		{
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			error,
			children,
			disabled,
			placeholder,
			tooltip,
			...props
		},
		ref
	) {
		return (
			<LabelContainer>
				<Type
					colorset={colorSet}
					disabled={disabled}
					error={error}
					semanticfont={semanticFonts.labelSmall}
				>
					{children}
				</Type>
				{tooltip !== undefined && (
					<TooltipPortal tooltip={tooltip}>
						<InfoIcon />
					</TooltipPortal>
				)}
			</LabelContainer>
		);
	}
);

export default FieldLabel;
