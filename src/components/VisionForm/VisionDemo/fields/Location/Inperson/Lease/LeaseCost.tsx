import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
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

interface LeaseCostProps {
	leasePath: FieldPath<VisionFormValues>;
}

const LeaseCost = ({ leasePath }: LeaseCostProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "leaseCost",
		inputMode,
	}) as keyof InpersonLeaseLocationSection;
	const field = useLeaseField<"leaseCostAverage">(leasePath, fieldName);

	const currencySymbol = useCurrencySymbol();

	const countryOrigin =
		useFormState<VisionFormValues>().values.overviewCountryOrigin;

	// Measurement System
	const measurementSystem = getMeasurementSystem(countryOrigin);

	const measurementLabel =
		measurementSystem === MeasurementSystemType.IMPERIAL ? "ft²" : "m²";

	return (
		<FormTextFieldNumericInputMode
			label={`Cost per ${measurementLabel}`}
			fieldNameBase={"leaseCost"}
			field={field}
			placeholder={"Cost"}
			width={"50%"}
			prefix={currencySymbol}
			allowNegativeValue={false}
			tooltip="The cost per unit of measurement to be paid per month"
		/>
	);
};

export default LeaseCost;
