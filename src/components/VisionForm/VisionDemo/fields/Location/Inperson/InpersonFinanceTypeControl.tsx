import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { InpersonFinanceType } from "@/types/VisionForm/locationSection";
import { Dispatch, SetStateAction } from "react";
import { inpersonFinanceTypeValues } from "../../../values/fields/segmentedControlValues";

const InpersonFinanceTypeControl = ({
	setFinanceType,
}: {
	setFinanceType: Dispatch<SetStateAction<InpersonFinanceType>>;
}) => {
	return (
		<FormSegmentedControl
			width={spacer320}
			data={inpersonFinanceTypeValues}
			onChange={(opt) => {
				setFinanceType(opt.value as InpersonFinanceType);
			}}
		/>
	);
};

export default InpersonFinanceTypeControl;
