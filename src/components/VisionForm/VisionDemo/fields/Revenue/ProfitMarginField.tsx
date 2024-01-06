import { useRevenueField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { RevenueSection } from "@/types/VisionForm/revenueSection";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import {
	profitFromMarginCalculator,
	revenueFromMarginCalculator,
} from "../util";

interface ProfitMarginFieldProps {
	revenuePath: FieldPath<VisionFormValues>;
}

const ProfitMarginField = ({ revenuePath }: ProfitMarginFieldProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "revenueProfitMargin",
		inputMode,
	}) as keyof RevenueSection;
	const field = useRevenueField<"revenueProfitMarginAverage">(
		revenuePath,
		fieldName
	);

	const {
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueRetailPriceField,
		revenueProfitMarginField,
	} = useRevenueFields(revenuePath);

	return (
		<FormTextFieldNumericInputMode
			label={"Margin"}
			fieldNameBase={"revenueProfitMargin"}
			placeholder={"Profit margin"}
			field={field}
			suffix={"%"}
			width={"50%"}
			tooltip="The percentage of profit you will make on your product"
			onChange={(value) => {
				let forcedValue = value!;

				//
				// Cannot go below -100
				//
				if (value! < -100) {
					forcedValue = -100;
					revenueProfitMarginField.input.onChange(forcedValue);
				}

				//
				// Profit amount
				//
				revenueProfitAmountField.input.onChange(
					profitFromMarginCalculator(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);

				//
				// Inperson price
				//
				revenueRetailPriceField.input.onChange(
					revenueFromMarginCalculator(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);
			}}
		/>
	);
};

export default ProfitMarginField;
