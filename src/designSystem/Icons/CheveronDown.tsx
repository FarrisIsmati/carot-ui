import { styled } from "styled-components";
import { IconProps, getFill } from "./utils";

const StyledSVG = styled.svg<IconProps>`
	fill: ${(props) =>
		props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
`;

const CheveronDown = (props: IconProps) => {
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
				d="M12 16.3751L6 10.3751L7.4 8.9751L12 13.5751L16.6 8.9751L18 10.3751L12 16.3751Z"
				fill={fill}
			/>
		</StyledSVG>
	);
};

export default CheveronDown;
