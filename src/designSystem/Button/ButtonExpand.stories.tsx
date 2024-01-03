import { useState } from "react";
import ButtonExpand from "./ButtonExpand";
export default {
	component: ButtonExpand,
	title: "Expand Button",
	tags: ["autodocs"],
};

export const Default = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<ButtonExpand
			onClick={() => {
				setIsExpanded((prev) => !prev);
			}}
			isExpanded={isExpanded}
			collapsedText="See more"
			expandedText="See less"
		/>
	);
};

export const Collapsed = () => <ButtonExpand>Collapsed</ButtonExpand>;

export const Expanded = () => <ButtonExpand isExpanded>Expanded</ButtonExpand>;
