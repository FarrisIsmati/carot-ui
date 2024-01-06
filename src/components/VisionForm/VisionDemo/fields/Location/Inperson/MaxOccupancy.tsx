import { useLeaseField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { InpersonLeaseLocationSection } from "@/types/VisionForm/locationSection";

interface MaxOccupancyProps {
	leasePath: FieldPath<VisionFormValues>;
}

const MaxOccupancy = ({ leasePath }: MaxOccupancyProps) => {
	// Input mode
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "maxOccupancy",
		inputMode,
	}) as keyof InpersonLeaseLocationSection;
	const field = useLeaseField<"maxOccupancyAverage">(leasePath, fieldName);

	return (
		<FormTextFieldNumericInputMode
			label={`Max occupancy`}
			fieldNameBase={"maxOccupancy"}
			field={field}
			placeholder={"Occupancy"}
			allowNegativeValue={false}
			width={"50%"}
			tooltip="The max amount of customers that can be in your inperson site at once (not including staff)"
		/>
	);
};

export default MaxOccupancy;
