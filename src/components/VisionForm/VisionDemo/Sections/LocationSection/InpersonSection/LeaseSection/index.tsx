import DaysOpenPerWeekGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/DaysOpenPerWeekGeneric";
import FootTrafficCurve from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/FootTrafficCurve";
import FootTrafficTurnoverTime from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/FootTrafficTurnoverTime";
import HoursOpenPerDayGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/HoursOpenPerDayGeneric";
import LeaseCost from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/Lease/LeaseCost";
import LeaseSize from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/Lease/LeaseSize";
import MaxOccupancy from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/MaxOccupancy";
import LocationFormContext from "@/components/VisionForm/VisionDemo/forms/LocationForm/LocationFormContext";
import { datesDifference } from "@/components/VisionForm/utils/dates";
import { useVisionFormField } from "@/components/VisionForm/utils/form";
import { useContext, useMemo } from "react";
import {
	FieldsContainer,
	StyledDoubleDropdownContainer,
} from "../../../styles";
import GrowthCurveGraph from "../../GrowthCurveGraph";

const LeaseSection = () => {
	// Context
	const formContext = useContext(LocationFormContext);

	// Lease location fields
	const trafficCurveField = useVisionFormField("trafficCurve");

	// Traffic curve length in days
	const trafficCurveLength = useMemo(
		() => datesDifference(formContext!.startDate, formContext!.endDate, "days"),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[formContext!.startDate, formContext!.endDate]
	);

	return (
		<FieldsContainer noMargin>
			<StyledDoubleDropdownContainer>
				<LeaseCost />
				<LeaseSize />
			</StyledDoubleDropdownContainer>
			<MaxOccupancy />
			<StyledDoubleDropdownContainer>
				<HoursOpenPerDayGeneric />
				<DaysOpenPerWeekGeneric />
			</StyledDoubleDropdownContainer>
			<GrowthCurveGraph
				curveType={trafficCurveField.input.value}
				length={trafficCurveLength}
			/>
			<FootTrafficCurve />
			<FootTrafficTurnoverTime />
		</FieldsContainer>
	);
};

export default LeaseSection;
