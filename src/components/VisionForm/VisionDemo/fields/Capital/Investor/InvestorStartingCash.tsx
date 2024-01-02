import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import CapitalFormContext from "../../../forms/CapitalForm/CapitalFormContext";

const InvestorStartingCash = () => {
	// Context
	const formContext = useContext(CapitalFormContext);
	const prefix = formContext?.currencySymbol;

	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumericInputMode
			label={"Initial Investment"}
			fieldNameBase={"investorStartingCash"}
			placeholder={"Initial Investment"}
			inputMode={inputMode}
			allowNegativeValue={false}
			prefix={prefix}
			tooltip="The amount of money the investor is putting into the company"
			size={Sizes.LARGE}
		/>
	);
};

export default InvestorStartingCash;
