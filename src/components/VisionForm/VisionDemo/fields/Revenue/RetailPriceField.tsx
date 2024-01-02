import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { useContext } from "react";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import { marginCalculator, profitCalculator } from "../util";

const RetailPriceField = () => {
	// Context
	const formContext = useContext(RevenueFormContext);
	const prefix = formContext?.currencySymbol;

	const {
		revenueRetailPriceInputMode,
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueProfitMarginField,
	} = useRevenueFields();

	return (
		<FormTextFieldNumericInputMode
			label={"Retail"}
			fieldNameBase={"revenueRetailPrice"}
			placeholder={"Inperson Price"}
			inputMode={revenueRetailPriceInputMode}
			allowNegativeValue={false}
			prefix={prefix}
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
