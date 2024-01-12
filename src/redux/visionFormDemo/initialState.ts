import { VisionFormValues } from "@/types/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";

export const initialVisionFormDemoReduxState: VisionFormValues = {
	overviewName: "",
	overviewCurrency: CurrencyTypes.USD,
	overviewIndustry: "",
	overviewCountryOrigin: CountriesEnum.USA,
	overviewStartDate: "",
	overviewEndDate: "",
	investors: [],
	loans: [],
	leases: [],
	products: [],
	legalStructure: "",
	taxRateGenericLow: 0,
	taxRateGenericAverage: 0,
	taxRateGenericHigh: 0,
};
