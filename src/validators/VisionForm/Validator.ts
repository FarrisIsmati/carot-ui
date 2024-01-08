import { VisionFormValues } from "@/types/VisionForm";
import investorFormValidator from "../Capital/Investor/InvestorFormValidator";
import { leaseLocationValidator } from "../Location/Inperson/Lease/LeaseLocationValidator";
import LocationValidator from "../Location/LocationValidator";
import { revenueValidator } from "../Revenue/RevenueValidator";
import taxesValidator from "../Taxes/TaxesValidator";
import {
	overviewCountryOriginValidator,
	overviewCurrencyValidator,
	overviewEndDateValidator,
	overviewIndustryValidator,
	overviewStartDateValidator,
} from "./Validators";

const Validator = (formValues: VisionFormValues) => {
	// Overview
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

	// Taxes section
	const taxes = taxesValidator(formValues);

	const validator = {
		// Overview
		overviewIndustry,
		overviewCountryOrigin,
		overviewCurrency,
		overviewStartDate,
		overviewEndDate,

		// Capital
		investors: formValues.investors.length
			? formValues.investors.map((investor) => {
					return investorFormValidator(investor);
			  })
			: undefined,

		// Location
		...LocationValidator(formValues),
		leases: formValues.leases.length
			? formValues.leases.map((lease) => {
					return leaseLocationValidator(lease);
			  })
			: undefined,

		// Revenue
		products: formValues.products.length
			? formValues.products.map((productValues) => {
					return revenueValidator({
						visionFormValues: formValues,
						revenueFormValues: productValues,
					});
			  })
			: undefined,

		// Taxes section
		...taxes,
	};

	return validator;
};

export default Validator;
