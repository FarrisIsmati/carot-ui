import { useLeaseField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { InpersonLeaseLocationSection } from "@/types/VisionForm/locationSection";

interface DaysOpenPerWeekGenericProps {
	leasePath: FieldPath<VisionFormValues>;
}

const DaysOpenPerWeekGeneric = ({ leasePath }: DaysOpenPerWeekGenericProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "daysOpenPerWeekGeneric",
		inputMode,
	}) as keyof InpersonLeaseLocationSection;
	const field = useLeaseField<"daysOpenPerWeekGenericAverage">(
		leasePath,
		fieldName
	);

	return (
		<FormTextFieldNumericInputMode
			label={"Days open per week"}
			fieldNameBase={"daysOpenPerWeekGeneric"}
			field={field}
			placeholder={"Days"}
			size={Sizes.SMALL}
			onChange={(value) => {
				// Value cannot be greater than 7
				if (value && value > 7) {
					field.input.onChange(7);
				}
			}}
			width={"50%"}
			allowNegativeValue={false}
			tooltip="The number of days the store is open per week (out of 7)"
		/>
	);
};

export default DaysOpenPerWeekGeneric;
