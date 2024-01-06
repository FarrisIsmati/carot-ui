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
import { marginCalculator, profitCalculator } from "../util";

interface RetailPriceFieldProps {
	revenuePath: FieldPath<VisionFormValues>;
}

const RetailPriceField = ({ revenuePath }: RetailPriceFieldProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "revenueRetailPrice",
		inputMode,
	}) as keyof RevenueSection;
	const field = useRevenueField<"revenueRetailPriceAverage">(
		revenuePath,
		fieldName
	);

	const currencySymbol = useCurrencySymbol();

	const {
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueProfitMarginField,
	} = useRevenueFields(revenuePath);

	return (
		<FormTextFieldNumericInputMode
			label={"Retail"}
			fieldNameBase={"revenueRetailPrice"}
			placeholder={"Inperson Price"}
			field={field}
			allowNegativeValue={false}
			prefix={currencySymbol}
			tooltip="The amount you will sell your product for"
			onChange={(value) => {
				//
				// Margin
				//
				revenueProfitMarginField.input.onChange(
					marginCalculator(revenueCostToProduceField.input.value, value!)
				);
				//
				// Profit
				//
				revenueProfitAmountField.input.onChange(
					profitCalculator(revenueCostToProduceField.input.value, value!)
				);
			}}
			width={"50%"}
		/>
	);
};

export default RetailPriceField;
