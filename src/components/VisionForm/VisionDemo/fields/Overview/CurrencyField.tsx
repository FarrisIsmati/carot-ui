import {
	useGetDropdownDefaultValue,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { currencyDropdownValues } from "../../values/fields/dropdownValues";

const CurrencyField = () => {
	const currencyField = useVisionFormField("overviewCurrency");

	return (
		<FormDropdown
			label="Currency"
			placeholder="Select"
			field={currencyField}
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
