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
import ButtonExpand from "@/designSystem/Button/ButtonExpand";
import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";
import numeral from "numeral";
import { useContext, useMemo, useState } from "react";
import { FieldsContainer, StyledDoubleFieldContainer } from "../../../styles";
import GrowthCurveGraph from "../../GrowthCurveGraph";
import useGetMonthlyRent from "./hooks/useGetMonthlyRent";

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

	// Expand more options
	const [isAdvancedOptionsExpanded, setIsAdvancedOptionsExpanded] =
		useState(false);

	// Monthly rent
	const monthlyRent = useGetMonthlyRent();

	return (
		<FieldsContainer noMargin>
			<StyledDoubleFieldContainer>
				<LeaseCost />
				<LeaseSize />
			</StyledDoubleFieldContainer>
			<Type semanticfont={semanticFonts.bodySmall}>
				Monthly rent {formContext?.currencySymbol}
				{numeral(monthlyRent).format("0,0.00")}
			</Type>

			<StyledDoubleFieldContainer>
				<HoursOpenPerDayGeneric />
				<DaysOpenPerWeekGeneric />
			</StyledDoubleFieldContainer>

			{isAdvancedOptionsExpanded && (
				<>
					<GrowthCurveGraph
						curveType={trafficCurveField.input.value}
						length={trafficCurveLength}
					/>
					<FootTrafficCurve />
					<StyledDoubleFieldContainer>
						<MaxOccupancy />
						<FootTrafficTurnoverTime />
					</StyledDoubleFieldContainer>
				</>
			)}
			<ButtonExpand
				onClick={() => {
					setIsAdvancedOptionsExpanded((prev) => !prev);
				}}
				isExpanded={isAdvancedOptionsExpanded}
				collapsedText="See traffic options"
				expandedText="Close traffic options"
			/>
		</FieldsContainer>
	);
};

export default LeaseSection;
