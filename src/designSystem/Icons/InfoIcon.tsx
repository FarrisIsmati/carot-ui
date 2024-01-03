import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { styled } from "styled-components";
import { IconProps, getFill } from "./utils";

const StyledSVG = styled.svg<IconProps>`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InfoIcon = (props: IconProps) => {
	const { colorSet = getColorSet(SemanticSetCores.BASE), disabled } = props;
	const fill = getFill(props);
	return (
		<StyledSVG
			colorSet={colorSet}
			disabled={disabled}
			width="16"
			height="16"
			viewBox="0 0 16 16"
		>
			<path d="M9.04167 12.0001H7V7H9.04167V12.0001Z" fill={fill} />
			<path
				d="M7.99228 5.95671C8.26153 5.95671 8.48991 5.86564 8.67741 5.6835C8.86491 5.50136 8.95866 5.27566 8.95866 5.00641C8.95866 4.73716 8.86759 4.50879 8.68545 4.32129C8.50331 4.13379 8.27762 4.04004 8.00837 4.04004C7.73912 4.04004 7.51074 4.13111 7.32324 4.31325C7.13574 4.49539 7.04199 4.72108 7.04199 4.99033C7.04199 5.25958 7.13306 5.48796 7.3152 5.67546C7.49734 5.86296 7.72303 5.95671 7.99228 5.95671Z"
				fill={fill}
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
				fill={fill}
			/>
		</StyledSVG>
	);
};

export default InfoIcon;
