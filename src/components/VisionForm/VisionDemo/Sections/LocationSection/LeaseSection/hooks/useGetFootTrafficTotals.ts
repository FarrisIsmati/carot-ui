import { useLeaseField } from "@/components/VisionForm/utils/form";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";

/**
 * Gets the max potential foot traffic possible
 * @returns
 */
const useGetFootTrafficTotals = (leasePath: FieldPath<VisionFormValues>) => {
	// Estimated cost per month
	// TODO: get inputmode from a form controller
	const inputMode = InputModeEnum.Average;

	const maxOccupancyField = useLeaseField<"maxOccupancyAverage">(
		leasePath,
		`maxOccupancy${inputMode}`
	);
	const maxOccupancy = Number(maxOccupancyField.input.value);
	const trafficTurnoverTimeField = useLeaseField<"trafficTurnoverTimeAverage">(
		leasePath,
		`trafficTurnoverTime${inputMode}`
	);
	const trafficTurnoverTime = Number(trafficTurnoverTimeField.input.value);
	const hoursOpenPerDayGenericField =
		useLeaseField<"hoursOpenPerDayGenericAverage">(
			leasePath,
			`hoursOpenPerDayGeneric${inputMode}`
		);
	const hoursOpenPerDayGeneric = Number(
		hoursOpenPerDayGenericField.input.value
	);
	const daysOpenPerWeekGenericField =
		useLeaseField<"daysOpenPerWeekGenericAverage">(
			leasePath,
			`daysOpenPerWeekGeneric${inputMode}`
		);
	const daysOpenPerWeekGeneric = Number(
		daysOpenPerWeekGenericField.input.value
	);

	const averageCustomerTurnovers = 60 / trafficTurnoverTime;

	const averageFootTrafficPerHour = maxOccupancy * averageCustomerTurnovers;
	const cappedFootTrafficPerHour =
		averageCustomerTurnovers < 1
			? maxOccupancy
			: maxOccupancy * averageCustomerTurnovers;
	// max amount of customers per hour cannot be below maxOccupancy
	let maxFootTrafficPerHour = cappedFootTrafficPerHour;
	let maxFootTrafficPerDay = averageFootTrafficPerHour * hoursOpenPerDayGeneric;
	let maxFootTrafficPerYear =
		maxFootTrafficPerDay * daysOpenPerWeekGeneric * 52;

	if (isNaN(maxFootTrafficPerHour)) {
		maxFootTrafficPerHour = 0;
	}
	if (isNaN(maxFootTrafficPerDay)) {
		maxFootTrafficPerDay = 0;
	}
	if (isNaN(maxFootTrafficPerYear)) {
		maxFootTrafficPerYear = 0;
	}

	return {
		maxFootTrafficPerHour,
		maxFootTrafficPerDay,
		maxFootTrafficPerYear,
	};
};

export default useGetFootTrafficTotals;
