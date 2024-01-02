import { SegmentedControlOption } from "@/designSystem/SegmentedControl";
import {
	InpersonFinanceType,
	InpersonUseType,
} from "@/types/VisionForm/locationSection";

//
// Space and place values
//
export const inpersonFinanceTypeValues: SegmentedControlOption[] = [
	{
		id: InpersonFinanceType.LEASE,
		value: "Lease",
		isActive: true,
		disabled: false,
	},
	{
		id: InpersonFinanceType.OWN,
		value: "Own",
		isActive: false,
		disabled: true,
	},
];

export const inpersonUseTypeValues: SegmentedControlOption[] = [
	{
		id: InpersonUseType.RETAIL,
		value: "Retail",
		isActive: true,
		disabled: false,
	},
	{
		id: InpersonUseType.OFFICE,
		value: "Office",
		isActive: false,
		disabled: true,
	},
];
