import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { InpersonUseType } from "@/types/VisionForm/locationSection";
import { Dispatch, SetStateAction } from "react";
import { inpersonUseTypeValues } from "../../../values/fields/segmentedControlValues";

const InpersonUseTypeControl = ({
	setUseType,
}: {
	setUseType: Dispatch<SetStateAction<InpersonUseType>>;
}) => {
	return (
		<FormSegmentedControl
			width={spacer320}
			data={inpersonUseTypeValues}
			onChange={(opt) => {
				setUseType(opt.value as InpersonUseType);
			}}
		/>
	);
};

export default InpersonUseTypeControl;
