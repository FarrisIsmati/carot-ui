import { ColorBaseCore, ColorSet, colorBaseMap } from "@/styles/colors";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";

export type IconProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
	};

export const getFill = (props: IconProps) => {
	if (props.colorSet === undefined) {
		return colorBaseMap[ColorBaseCore.NEUTRAL_6];
	}

	return props.disabled
		? props.colorSet?.text.disabled
		: props.colorSet?.text.default;
};
