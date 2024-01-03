import { getFieldName } from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { LeaseSection } from "@/types/VisionForm/locationSection/LeaseSection";
import { useFormState } from "react-final-form";

const useGetMonthlyRent = () => {
	// Form values
	const formState = useFormState<LeaseSection>();
	const formValues = formState.values;

	// Estimated cost per month
	// TODO: get inputmode from a form controller
	const inputMode = InputModeEnum.Average;
	const leaseCostFieldName = getFieldName({
		fieldNameBase: "leaseCost",
		inputMode,
	}) as keyof LeaseSection;
	const leaseSizeFieldName = getFieldName({
		fieldNameBase: "leaseSize",
		inputMode,
	}) as keyof LeaseSection;

	const leaseCost = formValues[leaseCostFieldName];
	const leaseSize = formValues[leaseSizeFieldName];

	const monthylRent = leaseCost * leaseSize;

	if (isNaN(monthylRent)) {
		return 0;
	}

	return monthylRent;
};

export default useGetMonthlyRent;
