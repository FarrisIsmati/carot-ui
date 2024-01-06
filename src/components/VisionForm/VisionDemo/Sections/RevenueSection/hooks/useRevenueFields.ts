import { useRevenueField } from "@/components/VisionForm/utils/form";
import { VisionFormValues } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { useState } from "react";

const useRevenueFields = (revenuePath: FieldPath<VisionFormValues>) => {
	// Get all input modes
	const [revenueCostToProduceInputMode, setRevenueCostToProduceInputMode] =
		useState(InputModeEnum.Average);
	const [revenueProfitMarginInputMode, setRevenueProfitMarginInputMode] =
		useState(InputModeEnum.Average);
	const [revenueRetailPriceInputMode, setRevenueInpersonPriceInputMode] =
		useState(InputModeEnum.Average);
	const [revenueProfitAmountInputMode, setRevenueProfitAmountInputMode] =
		useState(InputModeEnum.Average);
	// Get all fields
	const revenueCostToProduceField =
		useRevenueField<"revenueCostToProduceAverage">(
			revenuePath,
			`revenueCostToProduce${revenueCostToProduceInputMode}`
		);
	const revenueProfitMarginField =
		useRevenueField<"revenueProfitMarginAverage">(
			revenuePath,
			`revenueProfitMargin${revenueProfitMarginInputMode}`
		);

	const revenueRetailPriceField = useRevenueField<"revenueRetailPriceAverage">(
		revenuePath,
		`revenueRetailPrice${revenueRetailPriceInputMode}`
	);
	const revenueProfitAmountField =
		useRevenueField<"revenueProfitAmountAverage">(
			revenuePath,
			`revenueProfitAmount${revenueProfitAmountInputMode}`
		);

	return {
		revenueCostToProduceInputMode,
		setRevenueCostToProduceInputMode,
		revenueProfitMarginInputMode,
		setRevenueProfitMarginInputMode,
		revenueRetailPriceInputMode,
		setRevenueInpersonPriceInputMode,
		revenueProfitAmountInputMode,
		setRevenueProfitAmountInputMode,
		revenueCostToProduceField,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	};
};

export default useRevenueFields;
