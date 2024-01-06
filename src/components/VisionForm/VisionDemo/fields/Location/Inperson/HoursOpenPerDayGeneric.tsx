import { useLeaseField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { InpersonLeaseLocationSection } from "@/types/VisionForm/locationSection";

interface HoursOpenPerDayGenericProps {
	leasePath: FieldPath<VisionFormValues>;
}

const HoursOpenPerDayGeneric = ({ leasePath }: HoursOpenPerDayGenericProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "hoursOpenPerDayGeneric",
		inputMode,
	}) as keyof InpersonLeaseLocationSection;
	const field = useLeaseField<"hoursOpenPerDayGenericAverage">(
		leasePath,
		fieldName
	);

	return (
		<FormTextFieldNumericInputMode
			label={"Hours open per day"}
			fieldNameBase={"hoursOpenPerDayGeneric"}
			field={field}
			placeholder={"Hours"}
			size={Sizes.SMALL}
			onChange={(value) => {
				// Value cannot be greater than 24
				if (value && value > 24) {
					field.input.onChange(24);
				}
			}}
			width={"50%"}
			allowNegativeValue={false}
			tooltip="The number of hours the store is open per day (out of 24)"
		/>
	);
};

export default HoursOpenPerDayGeneric;
