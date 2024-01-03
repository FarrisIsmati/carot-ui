import { styled } from "styled-components";
import { IconProps, getFill } from "./utils";

const StyledSVG = styled.svg<IconProps>`
	fill: ${(props) =>
		props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
`;

const CheveronUp = (props: IconProps) => {
	const { colorSet, disabled } = props;
	const fill = getFill(props);
	return (
		<StyledSVG
			colorSet={colorSet}
			disabled={disabled}
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				d="M7.4 15.3751L6 13.9751L12 7.9751L18 13.9751L16.6 15.3751L12 10.7751L7.4 15.3751Z"
				fill={fill}
			/>
		</StyledSVG>
	);
};

export default CheveronUp;
