import {
	CurveType,
	InpersonLeaseLocationSection,
} from "@/types/VisionForm/locationSection";

const getInitialLeaseFormValues = (
	id: string
): InpersonLeaseLocationSection => ({
	// Id
	id,

	// Name
	locationName: "",

	// Construction costs (Lease/mobile/own)
	constructionCostLow: 0,
	constructionCostAverage: 0,
	constructionCostHigh: 0,

	// Max occupancy (Lease/mobile/own)
	maxOccupancyLow: 10,
	maxOccupancyAverage: 10,
	maxOccupancyHigh: 10,

	// Hours open per day (Generic hours open field)
	hoursOpenPerDayGenericLow: 8,
	hoursOpenPerDayGenericAverage: 8,
	hoursOpenPerDayGenericHigh: 8,

	// Days open per week (Generic days per week field)
	daysOpenPerWeekGenericLow: 5,
	daysOpenPerWeekGenericAverage: 5,
	daysOpenPerWeekGenericHigh: 5,

	// Traffic curve
	trafficCurve: CurveType.BASIC, // Todo updating the range of values will be a seperate field

	// Traffic turnover time
	trafficTurnoverTimeLow: 20,
	trafficTurnoverTimeAverage: 20,
	trafficTurnoverTimeHigh: 20,

	// Lease length months
	leaseLengthMonthsLow: 0,
	leaseLengthMonthsAverage: 0,
	leaseLengthMonthsHigh: 0,

	// Lease length years
	leaseLengthYearsLow: 2,
	leaseLengthYearsAverage: 2,
	leaseLengthYearsHigh: 2,

	// Lease size
	leaseSizeLow: 1000,
	leaseSizeAverage: 1000,
	leaseSizeHigh: 1000,

	// Lease cost
	leaseCostLow: 3,
	leaseCostAverage: 3,
	leaseCostHigh: 3,
});

export default getInitialLeaseFormValues;
