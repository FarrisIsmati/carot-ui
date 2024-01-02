import { LeaseSection, LeaseSectionInputModeLess } from "./LeaseSection";

export enum LocationType {
	MOBILE = "MOBILE",
	ONLINE = "ONLINE",
	INPERSON = "INPERSON",
}

export enum InpersonFinanceType {
	LEASE = "LEASE",
	OWN = "OWN",
}

export enum InpersonUseType {
	RETAIL = "RETAIL",
	OFFICE = "RETAIL",
}

export enum CurveType {
	NONE = "NONE",
	LINEAR = "LINEAR",
	BASIC = "BASIC",
	RAPID = "RAPID",
	STEADY = "STEADY",
	CONSISTENT = "CONSISTENT",
}

//
// Inperson
//

export interface InpersonLeaseLocationSection
	extends InpersonLocationSection,
		LeaseSection {
	id: string;
}

export interface InpersonLeaseLocationSectionInputModeLess
	extends InpersonLocationSectionInputModeLess,
		LeaseSectionInputModeLess {}

export interface InpersonLocationSection {
	// Name
	locationName: string;

	// Construction costs (Lease/mobile/own)
	constructionCostLow: number;
	constructionCostAverage: number;
	constructionCostHigh: number;

	// Max occupancy (Lease/mobile/own)
	maxOccupancyLow: number;
	maxOccupancyAverage: number;
	maxOccupancyHigh: number;

	// Hours open per day (Generic hours open field)
	hoursOpenPerDayGenericLow: number;
	hoursOpenPerDayGenericAverage: number;
	hoursOpenPerDayGenericHigh: number;

	// Days open per week (Generic days per week field)
	daysOpenPerWeekGenericLow: number;
	daysOpenPerWeekGenericAverage: number;
	daysOpenPerWeekGenericHigh: number;

	// Traffic curve
	trafficCurve: CurveType; // Todo updating the range of values will be a seperate field

	// Traffic turnover time
	trafficTurnoverTimeLow: number;
	trafficTurnoverTimeAverage: number;
	trafficTurnoverTimeHigh: number;
}

export interface InpersonLocationSectionInputModeLess {
	constructionCost: any;
	maxOccupancy: any;
	hoursOpenPerDayGeneric: any;
	daysOpenPerWeekGeneric: any;
	trafficTurnoverTime: any;
}

//
// Digital
//

// Todo...
