import { useLeaseField } from "@/components/VisionForm/utils/form";
import {
	MeasurementSystemType,
	getMeasurementSystem,
} from "@/components/VisionForm/utils/measurement";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { InpersonLeaseLocationSection } from "@/types/VisionForm/locationSection";
import { useFormState } from "react-final-form";

interface LeaseSizeProps {
	leasePath: FieldPath<VisionFormValues>;
}

const LeaseSize = ({ leasePath }: LeaseSizeProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "leaseSize",
		inputMode,
	}) as keyof InpersonLeaseLocationSection;
	const field = useLeaseField<"leaseSizeAverage">(leasePath, fieldName);

	const countryOrigin =
		useFormState<VisionFormValues>().values.overviewCountryOrigin;

	// Measurement System
	const measurementSystem = getMeasurementSystem(countryOrigin);

	const measurementLabel =
		measurementSystem === MeasurementSystemType.IMPERIAL ? "ft²" : "m²";

	return (
		<FormTextFieldNumericInputMode
			label={`Size ${measurementLabel}`}
			fieldNameBase={"leaseSize"}
			field={field}
			width={"50%"}
			placeholder={"Size"}
			allowNegativeValue={false}
			tooltip="The size of the inperson location (determines the lease length)"
		/>
	);
};

export default LeaseSize;
