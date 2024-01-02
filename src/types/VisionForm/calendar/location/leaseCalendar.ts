//
// Formatted calendar interface for all location values
//

//
// Lease
//
export interface LocationLeaseCalendar
	extends LocationCalendar,
		LocationInpersonCalendar,
		LocationLeaseCalendarLifetime,
		LocationLeaseCalendarTotal {
	// Lease cost per payment of period (week, month, annual)
	periodCost: number;
}

// Location values for calendar
interface LocationCalendar {
	id: string;
	name: string;
}

interface LocationInpersonCalendar {
	// Initial Construction cost (one time expense)
	initialConstructionCost: number;
}

interface LocationLeaseCalendarTotal {
	// Lease paid
	totalLeasePaid: number;
}

interface LocationLeaseCalendarLifetime {
	// Lease paid
	lifetimeLeasePaid: number;
}
