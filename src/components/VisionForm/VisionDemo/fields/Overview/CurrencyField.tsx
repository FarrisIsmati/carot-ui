import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { currencyDropdownValues } from "../../values/fields/dropdownValues";

const CurrencyField = () => {
	return (
		<FormDropdown
			label="Currency"
			placeholder="Select"
			fieldName="overviewCurrency"
			dataset={currencyDropdownValues}
			defaultValue={useGetDropdownDefaultValue(
				currencyDropdownValues,
				"overviewCurrency"
			)}
			tooltip="The type of currency all your business is done in"
			dropdownSize={Sizes.SMALL}
		/>
	);
};

export default CurrencyField;
