import { DateFormatEnum } from "@/designSystem/DatePicker/types";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import _ from "lodash";

//
// Overview Utils
//
export const getCountryDateFormat = (country: CountriesEnum) => {
	if (country === CountriesEnum.USA) {
		return DateFormatEnum.MMDDYYYY;
	}

	if (
		[
			CountriesEnum.China,
			CountriesEnum.Japan,
			CountriesEnum.Korea,
			CountriesEnum.Iran,
		].includes(country)
	) {
		return DateFormatEnum.YYYYMMDD;
	}

	return DateFormatEnum.DDMMYYYY;
};

//
// Revenue Utils
//

// Get the % margin +/- of goods
export const marginCalculator = (cost: number, revenue: number) => {
	const result = _.round((Number(revenue) / Number(cost)) * 100 - 100, 2);

	if (isNaN(result)) {
		return undefined;
	}

	return result;
};

// Get cost to make from % margin
export const revenueFromMarginCalculator = (cost: number, margin: number) => {
	const result = _.round((Number(margin) / 100 + 1) * Number(cost));

	if (isNaN(result)) {
		return undefined;
	}

	return result;
};

// Get profit amount from cost/revenue
export const profitCalculator = (cost: number, revenue: number) => {
	const result = _.round(Number(revenue) - Number(cost), 2);

	if (isNaN(result)) {
		return undefined;
	}

	return result;
};

// Get profit amount from margin
export const profitFromMarginCalculator = (cost: number, margin: number) => {
	const result = _.round((Number(margin) / 100) * Number(cost));

	if (isNaN(result)) {
		return undefined;
	}

	return result;
};

// Get revenue from profit amount
export const revenueFromProfitAmount = (cost: number, profitAmount: number) => {
	const result = _.round(Number(cost) + Number(profitAmount));

	if (isNaN(result)) {
		return undefined;
	}

	return result;
};

// Get margin from profit amount
export const marginFromProfitAmount = (cost: number, profitAmount: number) => {
	const result = _.round((Number(profitAmount) / Number(cost)) * 100);

	if (isNaN(result)) {
		return undefined;
	}

	return result;
};
