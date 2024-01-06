import { useLeaseField } from "@/components/VisionForm/utils/form";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";

const useGetMonthlyRent = (leasePath: FieldPath<VisionFormValues>) => {
	// Estimated cost per month
	// TODO: get inputmode from a form controller
	const inputMode = InputModeEnum.Average;

	const leaseCostField = useLeaseField<"leaseCostAverage">(
		leasePath,
		`leaseCost${inputMode}`
	);
	const leaseCost = Number(leaseCostField.input.value);
	const leaseSizeField = useLeaseField<"leaseSizeAverage">(
		leasePath,
		`leaseSize${inputMode}`
	);
	const leaseSize = Number(leaseSizeField.input.value);

	const monthlyRentDown = leaseCost * leaseSize;

	if (isNaN(monthlyRentDown)) {
		return 0;
	}

	return monthlyRentDown;
};

export default useGetMonthlyRent;
