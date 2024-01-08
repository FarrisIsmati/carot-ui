import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import { useInvestorField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode, {
	getFieldNameInputMode,
} from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";

interface InvestorStartingCashProps {
	investorPath: FieldPath<VisionFormValues>;
}

const InvestorStartingCash = ({ investorPath }: InvestorStartingCashProps) => {
	const inputMode = InputModeEnum.Average;
	const fieldName = getFieldNameInputMode({
		fieldNameBase: "investorStartingCash",
		inputMode,
	}) as keyof InvestorSection;
	const field = useInvestorField<"investorStartingCashAverage">(
		investorPath,
		fieldName
	);

	const currencySymbol = useCurrencySymbol();

	return (
		<FormTextFieldNumericInputMode
			label={"Initial Investment"}
			fieldNameBase={"investorStartingCash"}
			placeholder={`${currencySymbol}3,000`}
			field={field}
			allowNegativeValue={false}
			prefix={currencySymbol}
			tooltip="The amount of money the investor is putting into the company"
			size={Sizes.LARGE}
		/>
	);
};

export default InvestorStartingCash;
