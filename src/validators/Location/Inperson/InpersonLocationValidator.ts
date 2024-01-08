import {
	InpersonLeaseLocationSection,
	InpersonLocationSection,
} from "@/types/VisionForm/locationSection";
import {
	maxOccupancyValidator,
	trafficCurveValidator,
	trafficTurnoverTimeValidator,
} from "./InpersonLocationValidators";
import { leaseLocationValidator } from "./Lease/LeaseLocationValidator";

export const inpersonLocationValidator = (
	formValues: InpersonLocationSection
) => {
	// Maximum occupancy
	const maxOccupancyLow = maxOccupancyValidator(formValues.maxOccupancyLow);
	const maxOccupancyAverage = maxOccupancyValidator(
		formValues.maxOccupancyAverage
	);
	const maxOccupancyHigh = maxOccupancyValidator(formValues.maxOccupancyHigh);

	// Hours open per day generic
	const hoursOpenPerDayGenericLow = maxOccupancyValidator(
		formValues.hoursOpenPerDayGenericLow
	);
	const hoursOpenPerDayGenericAverage = maxOccupancyValidator(
		formValues.hoursOpenPerDayGenericAverage
	);
	const hoursOpenPerDayGenericHigh = maxOccupancyValidator(
		formValues.hoursOpenPerDayGenericHigh
	);

	// Days open per week generic
	const daysOpenPerWeekGenericLow = maxOccupancyValidator(
		formValues.daysOpenPerWeekGenericLow
	);
	const daysOpenPerWeekGenericAverage = maxOccupancyValidator(
		formValues.daysOpenPerWeekGenericAverage
	);
	const daysOpenPerWeekGenericHigh = maxOccupancyValidator(
		formValues.daysOpenPerWeekGenericHigh
	);

	// Traffic curve
	const trafficCurve = trafficCurveValidator(formValues.trafficCurve);

	// Traffic turnover time
	const trafficTurnoverTimeLow = trafficTurnoverTimeValidator(
		formValues.trafficTurnoverTimeLow
	);
	const trafficTurnoverTimeAverage = trafficTurnoverTimeValidator(
		formValues.trafficTurnoverTimeAverage
	);
	const trafficTurnoverTimeHigh = trafficTurnoverTimeValidator(
		formValues.trafficTurnoverTimeHigh
	);

	return {
		// Maximum Occupancy
		maxOccupancyLow,
		maxOccupancyAverage,
		maxOccupancyHigh,

		// Hours open per day
		hoursOpenPerDayGenericLow,
		hoursOpenPerDayGenericAverage,
		hoursOpenPerDayGenericHigh,

		// Days open per week generic
		daysOpenPerWeekGenericLow,
		daysOpenPerWeekGenericAverage,
		daysOpenPerWeekGenericHigh,

		// Traffic curve
		trafficCurve,

		// Traffic turnover time
		trafficTurnoverTimeLow,
		trafficTurnoverTimeAverage,
		trafficTurnoverTimeHigh,
	};
};

export const inpersonLeaseLocationValidator = (
	formValues: InpersonLeaseLocationSection
) => {
	const inperson = inpersonLocationValidator(formValues);
	const lease = leaseLocationValidator(formValues);

	return {
		...inperson,
		...lease,
	};
};
