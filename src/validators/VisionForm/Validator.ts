import { VisionFormValues } from "@/types/VisionForm";
import taxesValidator from "../Taxes/TaxesValidator";
import {
	overviewCountryOriginValidator,
	overviewCurrencyValidator,
	overviewEndDateValidator,
	overviewIndustryValidator,
	overviewStartDateValidator,
} from "./Validators";

const Validator = (formValues: VisionFormValues) => {
	//
	// Overview
	//

	const overviewIndustry = overviewIndustryValidator(
		formValues.overviewIndustry
	);
	const overviewCountryOrigin = overviewCountryOriginValidator(
		formValues.overviewCountryOrigin
	);
	const overviewCurrency = overviewCurrencyValidator(
		formValues.overviewCurrency
	);
	const overviewStartDate = overviewStartDateValidator(
		formValues.overviewStartDate
	);
	const overviewEndDate = overviewEndDateValidator(formValues.overviewEndDate);

	//
	// Taxes section
	//
	const taxes = taxesValidator(formValues);

	return {
		//
		// Overview
		//
		overviewIndustry,
		overviewCountryOrigin,
		overviewCurrency,
		overviewStartDate,
		overviewEndDate,

		// Taxes section
		...taxes,
	};
};

export default Validator;
