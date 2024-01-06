import { DropdownData } from "@/designSystem/Dropdown/types";
import {
	AllFormValues,
	AllFormValuesNoArrays,
	VisionFormValues,
} from "@/types/VisionForm";
import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { FieldPath } from "@/types/VisionForm/fieldPath";
import { InpersonLeaseLocationSection } from "@/types/VisionForm/locationSection";
import { RevenueSection } from "@/types/VisionForm/revenueSection";
import { FieldMetaState, useField } from "react-final-form";

/**
 * Get form field
 * For properly typed nested form fields use their respective hook
 * @param fieldKey
 * @returns
 */
export const useVisionFormField = <K extends keyof AllFormValues>(
	fieldKey: K
) => useField<AllFormValues[typeof fieldKey]>(fieldKey);

/**
 * Get investor form field
 * @param fieldKey
 * @returns
 */
export const useInvestorField = <T extends keyof InvestorSection>(
	investorPath: FieldPath<VisionFormValues>,
	fieldName: keyof InvestorSection
) => useField<InvestorSection[T]>(`${investorPath}.${fieldName}`);

/**
 * Get lease form field
 * @param fieldKey
 * @returns
 */
export const useLeaseField = <T extends keyof InpersonLeaseLocationSection>(
	leasePath: FieldPath<VisionFormValues>,
	fieldName: keyof InpersonLeaseLocationSection
) => useField<InpersonLeaseLocationSection[T]>(`${leasePath}.${fieldName}`);

/**
 * Get revenue form field
 * @param fieldKey
 * @returns
 */
export const useRevenueField = <T extends keyof RevenueSection>(
	revenuePath: FieldPath<VisionFormValues>,
	fieldName: keyof RevenueSection
) => useField<RevenueSection[T]>(`${revenuePath}.${fieldName}`);

// Input meta has visible errors
export const hasVisibleErrors = <T>(meta?: FieldMetaState<T>) => {
	return !!meta?.touched && Boolean(meta?.error);
};

// Gets the index of a dropdown from the dropdown values
export const getDropdownIndex = (
	dropdownValues: DropdownData<any>[],
	targetId: string | undefined
) => {
	return dropdownValues.findIndex((value) => value.id === targetId);
};

// Gets the value of a dropdown from the dropdown values
export const getDropdownValue = (
	dropdownValues: DropdownData<any>[],
	targetValue: string | number | undefined | Set<string>
) => {
	return dropdownValues.find((value) => value.id === targetValue);
};

// Get default value for dropdown
export const useGetDropdownDefaultValue = (
	dropdownValues: DropdownData<any>[],
	fieldName: keyof AllFormValuesNoArrays
) => {
	const field = useVisionFormField(fieldName);
	return getDropdownValue(dropdownValues, field.input.value);
};

// Get default value for text field
export const useGetTextFieldDefaultValue = (fieldName: keyof AllFormValues) => {
	const field = useVisionFormField(fieldName);
	const fieldValue = field.input.value;
	return fieldValue;
};

// Takes in inputmodeless generic and full section generic
export const getKeyInputMode = <T, P>(
	key: keyof T,
	inputMode: InputModeEnum
): keyof P => `${key.toString()}${inputMode}` as keyof P;
