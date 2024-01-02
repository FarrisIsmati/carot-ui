import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React from "react";
import { IconWrapper } from "../IconWrapper";
import InfoIcon from "../Icons/InfoIcon";
import TooltipPortal from "../Tooltip/TooltipPortal";
import Type from "../Type";
import {
	LabelContainer,
	StyledDropdownTrigger,
	StyledDropdownTriggerContentContainer,
	StyledDropdownTriggerText,
	StyledErrorTextDropdownTrigger,
} from "./styles";
import { DropdownData, DropdownType } from "./types";
import getFieldWidth from "./utils/getFieldWidth";

export type DropdownTriggerProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
		/**
		 * Click menu
		 */
		onClickMenu: () => void;
		/**
		 * If true adds styling to indicate error state
		 */
		error?: boolean;
		/**
		 * Label title
		 */
		label?: string;
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
		/**
		 * Text to display for an error state
		 */
		errorText?: string;
		/**
		 * isMenuOpen
		 */
		isMenuOpen?: boolean;
		/**
		 * Selected value
		 */
		selectedItem: DropdownData<any> | null;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		dropdownSize?: Sizes;
		/**
		 * Info tooltip on hover
		 */
		tooltip?: string;
	};

const DropdownTrigger = React.forwardRef<HTMLElement, DropdownTriggerProps>(
	function DropdownTrigger(
		{
			onClickMenu,
			label,
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			error,
			errorText,
			children,
			disabled,
			isMenuOpen,
			placeholder,
			selectedItem,
			tooltip,
			width,
			dropdownSize = Sizes.LARGE,
			type = DropdownType.NORMAL,
			...props
		},
		ref
	) {
		// If custom width entered use it otherwise use sizes
		const dropdownWidth = width ?? getFieldWidth(dropdownSize);

		return (
			<StyledDropdownTrigger
				ref={ref}
				type="button"
				colorSet={colorSet}
				isMenuOpen={isMenuOpen}
				error={error}
				aria-haspopup="listbox"
				onMouseDown={onClickMenu}
				disabled={disabled}
				dropdownSize={dropdownSize}
				width={dropdownWidth}
				{...props}
			>
				{/* Top label to display */}
				{label && (
					<LabelContainer>
						<Type
							colorset={colorSet}
							disabled={disabled}
							error={error}
							semanticfont={semanticFonts.bodySmall}
						>
							{label}
						</Type>
						{tooltip !== undefined && (
							<TooltipPortal tooltip={tooltip}>
								<InfoIcon />
							</TooltipPortal>
						)}
					</LabelContainer>
				)}
				{/* Content inside the dropdown */}
				<StyledDropdownTriggerContentContainer>
					{/* Text displaying inside the dropdown */}
					<StyledDropdownTriggerText
						disabled={disabled}
						colorset={colorSet}
						selectedItem={selectedItem}
					>
						{!selectedItem && placeholder}
						{selectedItem && selectedItem.value}
					</StyledDropdownTriggerText>

					{/* Icon arrow up or down indicating dropdown open/closed */}
					{isMenuOpen ? (
						<IconWrapper
							icon={KeyboardArrowUp}
							padding={spacer2}
							size={Sizes.MEDIUM}
							disabled={disabled}
						/>
					) : (
						<IconWrapper
							icon={KeyboardArrowDown}
							padding={spacer2}
							size={Sizes.MEDIUM}
							disabled={disabled}
						/>
					)}
				</StyledDropdownTriggerContentContainer>
				{/* Error text bottom of the dropdown */}
				{errorText && (
					<StyledErrorTextDropdownTrigger
						colorset={colorSet}
						error={error}
						semanticfont={semanticFonts.bodySmall}
					>
						{errorText}
					</StyledErrorTextDropdownTrigger>
				)}
			</StyledDropdownTrigger>
		);
	}
);

export default DropdownTrigger;
