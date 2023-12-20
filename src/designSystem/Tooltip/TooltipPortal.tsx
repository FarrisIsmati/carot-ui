import { Tooltip, TooltipProps, tooltipClasses } from "@material-ui/core";
import { ReactNode, useLayoutEffect, useReducer, useRef } from "react";
import styled from "styled-components";

export const StyledMaterialsTooltip = styled(
	({ className, ...props }: TooltipProps) => (
		<Tooltip {...props} classes={{ popper: className }} />
	)
)(() => ({
	inset: `-16px auto auto 0px !important`,
	[`& .${tooltipClasses.tooltip}`]: {
		padding: 0,
		margin: 0,
	},
}));

interface TooltipPortalProps {
	tooltip: NonNullable<ReactNode>;
	children?: React.ReactNode;
}

const TooltipPortal = ({ tooltip, children }: TooltipPortalProps) => {
	const boundingElement = useRef<HTMLDivElement>(null);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	useLayoutEffect(() => {
		forceUpdate();
	}, []);

	return (
		<div ref={boundingElement}>
			<StyledMaterialsTooltip
				title={tooltip}
				placement="right"
				PopperProps={{
					popperOptions: {
						modifiers: [
							{
								name: "preventOverflow",
								options: {
									boundary: boundingElement.current,
								},
							},
						],
					},
				}}
			>
				<div>{children}</div>
			</StyledMaterialsTooltip>
		</div>
	);
};

export default TooltipPortal;
