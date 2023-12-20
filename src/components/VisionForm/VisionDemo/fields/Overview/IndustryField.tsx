import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../../values/fields/dropdownValues";

const IndustryField = () => {
	return (
		<FormDropdown
			label="Industry"
			placeholder="Select"
			fieldName="overviewIndustry"
			tooltip="The type of industry your business is in"
			dataset={industryDropdownValues}
		/>
	);
};

export default IndustryField;
