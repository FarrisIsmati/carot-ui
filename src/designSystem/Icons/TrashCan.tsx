import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { styled } from "styled-components";

export type TrashCanProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
	};

const StyledSVG = styled.svg<TrashCanProps>`
	fill: ${(props) =>
		props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
`;

const TrashCan = ({
	colorSet = getColorSet(SemanticSetCores.BASE),
	disabled,
}: TrashCanProps) => (
	<StyledSVG
		colorSet={colorSet}
		disabled={disabled}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
	>
		<path d="M9.75 10H11.25V15H9.75V10Z" />
		<path d="M14.25 10H12.75V15H14.25V10Z" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15.5 4H8.5V6H5V8H6V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V8H19V6H15.5V4ZM8 8H16V17L8 17V8Z"
		/>
	</StyledSVG>
);

export default TrashCan;
