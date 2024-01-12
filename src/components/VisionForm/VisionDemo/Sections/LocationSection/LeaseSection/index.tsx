import DaysOpenPerWeekGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/DaysOpenPerWeekGeneric";
import FootTrafficCurve from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/FootTrafficCurve";
import FootTrafficTurnoverTime from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/FootTrafficTurnoverTime";
import HoursOpenPerDayGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/HoursOpenPerDayGeneric";
import LeaseCost from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/Lease/LeaseCost";

import LeaseSize from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/Lease/LeaseSize";
import MaxOccupancy from "@/components/VisionForm/VisionDemo/fields/Location/Inperson/MaxOccupancy";
import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import { datesDifference } from "@/components/VisionForm/utils/dates";
import { useLeaseField } from "@/components/VisionForm/utils/form";
import AnimateNumber from "@/components/common/AnimateNumber";
import ButtonChip from "@/designSystem/Button/ButtonChip";
import ButtonExpand from "@/designSystem/Button/ButtonExpand";
import { ChipType } from "@/designSystem/Chip";
import TrashCan from "@/designSystem/Icons/TrashCan";
import Type from "@/designSystem/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { useMemo, useState } from "react";
import { useForm, useFormState } from "react-final-form";
import { styled } from "styled-components";
import { FieldsContainer, StyledDoubleFieldContainer } from "../../styles";
import GrowthCurveGraph from "../GrowthCurveGraph";
import useGetFootTrafficTotals from "./hooks/useGetFootTrafficTotals";
import useGetMonthlyRent from "./hooks/useGetMonthlyRent";

const FooterButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

interface LeaseSectionProps {
	leasePath: FieldPath<VisionFormValues>;
}

const LeaseSection = ({ leasePath }: LeaseSectionProps) => {
	// Form
	const form = useForm<VisionFormValues>();

	// Form Values
	const formValues = useFormState<VisionFormValues>().values;

	// Currency symbol
	const currencySymbol = useCurrencySymbol();

	// Lease location fields
	const trafficCurveField = useLeaseField<"trafficCurve">(
		leasePath,
		"trafficCurve"
	);

	// Traffic curve length in days
	const trafficCurveLength = useMemo(
		() =>
			datesDifference(
				formValues.overviewStartDate,
				formValues.overviewEndDate,
				"days"
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[formValues.overviewStartDate, formValues.overviewEndDate]
	);

	// Expand more options
	const [isAdvancedOptionsExpanded, setIsAdvancedOptionsExpanded] =
		useState(false);

	// Monthly rent
	const monthlyRent = useGetMonthlyRent(leasePath);

	// Foot traffic totals
	const { maxFootTrafficPerHour, maxFootTrafficPerDay, maxFootTrafficPerYear } =
		useGetFootTrafficTotals(leasePath);

	return (
		<FieldsContainer noMargin>
			<Type
				semanticfont={semanticFonts.labelSmall}
				color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
			>
				Retail lease
			</Type>
			<StyledDoubleFieldContainer>
				<LeaseCost leasePath={leasePath} />
				<LeaseSize leasePath={leasePath} />
			</StyledDoubleFieldContainer>
			<Type semanticfont={semanticFonts.bodySmall}>
				<AnimateNumber
					preText={`Monthly rent ${currencySymbol}`}
					value={monthlyRent}
					decimals={2}
				/>
			</Type>

			{isAdvancedOptionsExpanded && (
				<>
					<Type
						semanticfont={semanticFonts.labelSmall}
						color={colorBaseMap[ColorBaseCore.NEUTRAL_2]}
					>
						Customer traffic
					</Type>
					<GrowthCurveGraph
						curveType={trafficCurveField.input.value}
						length={trafficCurveLength}
						startDate={formValues.overviewStartDate}
					/>
					<FootTrafficCurve leasePath={leasePath} />
					<StyledDoubleFieldContainer>
						<MaxOccupancy leasePath={leasePath} />
						<FootTrafficTurnoverTime leasePath={leasePath} />
					</StyledDoubleFieldContainer>
					<StyledDoubleFieldContainer>
						<HoursOpenPerDayGeneric leasePath={leasePath} />
						<DaysOpenPerWeekGeneric leasePath={leasePath} />
					</StyledDoubleFieldContainer>
					<Type semanticfont={semanticFonts.bodySmall}>
						<AnimateNumber
							preText={`Max customers per hour `}
							value={maxFootTrafficPerHour}
						/>
					</Type>
					<Type semanticfont={semanticFonts.bodySmall}>
						<AnimateNumber
							preText={`Max customers per day `}
							value={maxFootTrafficPerDay}
						/>
					</Type>
					<Type semanticfont={semanticFonts.bodySmall}>
						<AnimateNumber
							preText={`Max customers per year `}
							value={maxFootTrafficPerYear}
						/>
					</Type>
				</>
			)}
			<FooterButtonContainer>
				<ButtonExpand
					onClick={() => {
						setIsAdvancedOptionsExpanded((prev) => !prev);
					}}
					isExpanded={isAdvancedOptionsExpanded}
					collapsedText="See traffic options"
					expandedText="Close traffic options"
				/>
				<ButtonChip
					size={Sizes.SMALL}
					chipType={ChipType.LABEL}
					iconTrailing={TrashCan}
					onClick={() => {
						// Assuming only one allowed at a time remove all leases
						form.change("leases", []);
					}}
				>
					Remove
				</ButtonChip>
			</FooterButtonContainer>
		</FieldsContainer>
	);
};

export default LeaseSection;
