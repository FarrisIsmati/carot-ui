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

interface CostToProduceFieldProps {
	revenuePath: FieldPath<VisionFormValues>;
}

const CostToProduceField = ({ revenuePath }: CostToProduceFieldProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "revenueCostToProduce",
		inputMode,
	}) as keyof RevenueSection;
	const field = useRevenueField<"revenueCostToProduceAverage">(
		revenuePath,
		fieldName
	);

	const currencySymbol = useCurrencySymbol();

	const {
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	} = useRevenueFields(revenuePath);

	return (
		<FormTextFieldNumericInputMode
			label={"Cost"}
			fieldNameBase={"revenueCostToProduce"}
			field={field}
			placeholder={"Cost to make"}
			prefix={currencySymbol}
			width={"50%"}
			allowNegativeValue={false}
			tooltip="The amonut your product will cost you to make"
			onChange={(value) => {
				//
				// Margin
				//
				revenueProfitMarginField.input.onChange(
					marginCalculator(value!, revenueRetailPriceField.input.value)
				);
				//
				// Profit
				//
				revenueProfitAmountField.input.onChange(
					profitCalculator(value!, revenueRetailPriceField.input.value)
				);
			}}
		/>
	);
};

export default CostToProduceField;
