import { dateFormatMapper } from "@/designSystem/DatePicker";
import { DateFormatEnum } from "@/designSystem/DatePicker/types";
import { VisionFormValues } from "@/types/VisionForm";
import { InvestorType } from "@/types/VisionForm/capitalSection/InvestorSection";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { ScheduleType } from "@/types/VisionForm/common/schedule";
import moment from "moment";
import { LegalStructureDropdownValuesEnum } from "../fields/dropdownValues";

export const visionFormDemoInitialValues: VisionFormValues = {
	//
	// Overview Section
	//
	overviewName: "",
	overviewCurrency: CurrencyTypes.USD, // Need to set based on location
	overviewIndustry: "",
	overviewCountryOrigin: CountriesEnum.USA, // Need to ask for users location/ or default to unknown
	overviewStartDate: moment().format(dateFormatMapper[DateFormatEnum.MMDDYYYY]),
	overviewEndDate: moment()
		.add(2, "years")
		.subtract(1, "days")
		.format(dateFormatMapper[DateFormatEnum.MMDDYYYY]),

	//
	// Loans and Investors
	//

	investors: [
		{
			investorName: "investor1",
			investorType: InvestorType.ACTIVE,
			investorJoinDate: "",
			investorEquityPercentage: 100,
			investorStartingCashLow: undefined,
			investorStartingCashAverage: undefined,
			investorStartingCashHigh: undefined,
			investorDrawProfitPercentageLow: 0,
			investorDrawProfitPercentageAverage: 0,
			investorDrawProfitPercentageHigh: 0,
			investorDrawTargetLow: 0,
			investorDrawTargetAverage: 0,
			investorDrawTargetHigh: 0,
			investorDrawSchedule: ScheduleType.MONTHLY,
			investorTaxBracket: "",
			id: "investor1",
		},
	],
	loans: [],
	leases: [],
	products: [
		{
			id: "product1",
			//
			// Revenue Section
			//

			// Location link
			locationIds: new Set<string>(["lease1"]),

			// Product name
			productName: "",

			// Inperson price
			revenueRetailPriceLow: 0,
			revenueRetailPriceAverage: 0,
			revenueRetailPriceHigh: 0,

			// Cost to produce
			revenueCostToProduceLow: 0,
			revenueCostToProduceAverage: 0,
			revenueCostToProduceHigh: 0,

			// Profit amount
			revenueProfitAmountLow: 0,
			revenueProfitAmountAverage: 0,
			revenueProfitAmountHigh: 0,

			// Profit margin
			revenueProfitMarginLow: 0,
			revenueProfitMarginAverage: 0,
			revenueProfitMarginHigh: 0,

			// Customer conversion rate
			customerConversionRateLow: 100,
			customerConversionRateAverage: 100,
			customerConversionRateHigh: 100,
		},
	],

	//
	// Legal Section
	//
	legalStructure: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,

	//
	// Taxes section
	//

	// Tax rate generic
	taxRateGenericLow: 0,
	taxRateGenericAverage: 0,
	taxRateGenericHigh: 0,
};
