import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import {
	investorEquityValidator,
	investorStartingCashValidator,
} from "./InvestorFormValidators";

const InvestorFormValidator = (formValues: InvestorSection) => {
	// Starting cash
	const investorStartingCashLow = investorStartingCashValidator(
		formValues.investorStartingCashLow
	);
	const investorStartingCashAverage = investorStartingCashValidator(
		formValues.investorStartingCashAverage
	);
	const investorStartingCashHigh = investorStartingCashValidator(
		formValues.investorStartingCashHigh
	);

	const investorEquityPercentage = investorEquityValidator(
		formValues.investorEquityPercentage
	);

	return {
		// Starting cash
		investorStartingCashLow,
		investorStartingCashAverage,
		investorStartingCashHigh,

		// Equity
		investorEquityPercentage,
	};
};

export default InvestorFormValidator;
