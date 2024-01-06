import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import { useRevenueField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { RevenueSection } from "@/types/VisionForm/revenueSection";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import { marginFromProfitAmount, revenueFromProfitAmount } from "../util";

interface ProfitAmountFieldProps {
	revenuePath: FieldPath<VisionFormValues>;
}

const ProfitAmountField = ({ revenuePath }: ProfitAmountFieldProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "revenueProfitAmount",
		inputMode,
	}) as keyof RevenueSection;
	const field = useRevenueField<"revenueProfitAmountAverage">(
		revenuePath,
		fieldName
	);

	const currencySymbol = useCurrencySymbol();

	const {
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueRetailPriceField,
		revenueProfitMarginField,
	} = useRevenueFields(revenuePath);

	return (
		<FormTextFieldNumericInputMode
			label={"Profit"}
			fieldNameBase={"revenueProfitAmount"}
			placeholder={"Profit amount"}
			field={field}
			prefix={currencySymbol}
			width={"50%"}
			tooltip="The amount of profit you will make on your product"
			onChange={(value) => {
				let forcedValue = value!;

				//
				// Cannot go below -100
				//
				if (forcedValue < revenueCostToProduceField.input.value * -1) {
					forcedValue = revenueCostToProduceField.input.value * -1;
					revenueProfitAmountField.input.onChange(forcedValue);
				}

				//
				// Revenue from profit amount
				//
				revenueRetailPriceField.input.onChange(
					revenueFromProfitAmount(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);
				//
				// Margin from profit amount
				//
				revenueProfitMarginField.input.onChange(
					marginFromProfitAmount(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);
			}}
		/>
	);
};

export default ProfitAmountField;
